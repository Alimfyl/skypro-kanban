import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/tasks";

import { useAuth } from "./AuthContext";

const TaskContext = createContext(null);

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within TaskProvider");
  }

  return context;
};

export const TaskProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadTasks();
    } else {
      setTasks([]);
    }
  }, [isAuthenticated, loadTasks]);

  const addTask = async (taskData) => {
    if (!taskData.title?.trim()) {
      setError("Название задачи не может быть пустым");
      return;
    }

    setError(null);

    try {
      const updatedTasks = await createTask(taskData);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const editTask = async (id, taskData) => {
    setError(null);

    try {
      const updatedTasks = await updateTask(id, taskData);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const removeTask = async (id) => {
    setError(null);

    try {
      const updatedTasks = await deleteTask(id);
      setTasks(updatedTasks);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isLoading,
        error,
        fetchTasks: loadTasks,
        addTask,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};