import { createContext, useContext, useState, useEffect, useCallback } from "react";
// Импортируем fetchTasks вместо getTasks
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";
import { useAuth } from "./AuthContext";

const TaskContext = createContext(null);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Получение всех задач
  const loadTasks = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchTasks(); // Используем правильное имя функции
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Автоматическая загрузка при авторизации
  useEffect(() => {
    if (isAuthenticated) {
      loadTasks();
    } else {
      setTasks([]);
    }
  }, [isAuthenticated, loadTasks]);

  // Добавление новой задачи
  const addTask = async (taskData) => {
    setError(null);
    try {
      // API возвращает обновленный массив всех задач
      const updatedTasks = await createTask(taskData);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Редактирование задачи
  const editTask = async (id, taskData) => {
    setError(null);
    try {
      // API возвращает обновленный массив всех задач
      const updatedTasks = await updateTask(id, taskData);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Удаление задачи
  const removeTask = async (id) => {
    setError(null);
    try {
      // API возвращает обновленный массив всех задач после удаления
      const updatedTasks = await deleteTask(id);
      setTasks(updatedTasks);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error, fetchTasks: loadTasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
