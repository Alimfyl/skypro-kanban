// src/api/index.js
import axios from 'axios';

// Базовый URL берём из .env (можно задать в Vite/CRA)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://example.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ----- Перехватчик запросов: добавляем токен, если он есть  -----
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ----- Перехватчик ответа: единый способ обработки ошибок  -----
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Если сервер вернул 401 – принудительно выходим (можно добавить dispatch)
    if (error.response?.status === 401) {
      // например, очистить токен и редиректнуть на /login
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    // Прокидываем ошибку дальше, чтобы её можно было catch‑ить в сервисах
    return Promise.reject(error);
  }
);

export default api;
