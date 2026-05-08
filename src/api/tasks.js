//const baseHost = "https://wedev-api.sky.pro/api/kanban";
//export async function getTasks( {token} ) {
//    const response = await fetch(baseHost, {
//        headers: {
//            Authorization: `Bearer ${token}`,
//        },
//    });
//
//    if (!response.ok) {
//        throw new Error("Ошибка при получении задач")
//    }
//}
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
        const {data} = await api.post('/kanban', taskData);
        return data.tasks;
    } catch (err) {
        throw new Error(err.response?.data?.error || 'Ошибка при создании задачи');
    }
};

export const updateTask = async (id, taskData) => {
    try {
        const {data} = await api.put(`/kanban/${id}`, taskData);
        return data.tasks;
    }catch (err) {
        throw new Error(err.response?.data?.error || 'Ошибка при обновлении');
    }
};

export const deleteTask = async (id) => {
    try  {
        const {data} = await api.delete(`/kanban/${id}`);
        return data.tasks;
    } catch (err) {
        throw new Error(err.response?.data?.error || 'Не удалось удалить');
    }
};
