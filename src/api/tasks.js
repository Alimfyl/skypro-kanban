
import api from './index';


export const fetchTasks = async () => {
    try {
        const {data} = await api.get('/kanban');
        return data.tasks;
    } catch (err) {
        throw new Error(err.response?.data?.error || 'Не удалось загрузить задачи');
    }
};

export const createTask = async (taskData) => {
    try {
        const {data} = await api.post('/kanban', {
            title: taskData.title,
            topic: taskData.topic,
            status: taskData.status || "Без статуса",
            text: taskData.description, 
            date: taskData.date,
        });
        return data.tasks;
    } catch (err) {
        throw new Error(err.response?.data?.error || 'Ошибка при создании задачи');
    }
};

export const updateTask = async (_id, taskData) => {
    try {
        const {data} = await api.put(`/kanban/${_id}`, {
            title: taskData.title,
            topic: taskData.topic,
            status: taskData.status,
            text: taskData.description || taskData.text, 
            date: taskData.date,
        });
        return data.tasks;
    }catch (err) {
        throw new Error(err.response?.data?.error || 'Ошибка при обновлении');
    }
};

export const deleteTask = async (_id) => {
    try  {
        const {data} = await api.delete(`/kanban/${_id}`);
        return data.tasks;
    } catch (err) {
        throw new Error(err.response?.data?.error || 'Не удалось удалить');
    }
};
