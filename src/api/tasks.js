import api from './index'; 


const getRequestConfig = (method, bodyData = null) => {
  const token = localStorage.getItem("token");
  
  const config = {
    method: method,
    headers: {
        
      Authorization: `Bearer ${token}`, 
      
    }
  };

  if (bodyData) {
    config.body = JSON.stringify(bodyData);
  }

  return config;
};


export const fetchTasks = async () => {
  try {
    
    const response = await fetch(`${api.defaults.baseURL}/kanban`, getRequestConfig("GET"));

    if (!response.ok) {
      if (response.status === 401) throw new Error("Срок действия токена истек");
      throw new Error("Не удалось загрузить задачи");
    }

    const data = await response.json();
    return data.tasks;
  } catch (err) {
    throw new Error(err.message || "Не удалось загрузить задачи");
  }
};


export const createTask = async (taskData) => {
  try {
    const response = await fetch(`${api.defaults.baseURL}/kanban`, getRequestConfig("POST", {
      title: taskData.title,
      topic: taskData.topic,
      status: taskData.status || "Без статуса",
      description: taskData.description || taskData.text || "", 
      date: taskData.date,
    }));

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Ошибка при создании задачи");
    }

    const data = await response.json();
    return data.tasks;
  } catch (err) {
    throw new Error(err.message || "Ошибка при создании задачи");
  }
};


export const updateTask = async (_id, taskData) => {
  try {
    const response = await fetch(`${api.defaults.baseURL}/kanban/${_id}`, getRequestConfig("PUT", {
      title: taskData.title,
      topic: taskData.topic,
      status: taskData.status,
      description: taskData.description || taskData.text, 
      date: taskData.date,
    }));

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Ошибка при обновлении");
    }

    const data = await response.json();
    return data.tasks;
  } catch (err) {
    throw new Error(err.message || "Ошибка при обновлении");
  }
};


export const deleteTask = async (_id) => {
  try {
    const response = await fetch(`${api.defaults.baseURL}/kanban/${_id}`, getRequestConfig("DELETE"));

    if (!response.ok) {
      throw new Error("Не удалось удалить задачу");
    }

    const data = await response.json();
    return data.tasks;
  } catch (err) {
    throw new Error(err.message || "Не удалось удалить");
  }
};
