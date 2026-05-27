// src/api/index.js
import axios from 'axios';


const ApiBaseUrl = import.meta.env.VITE_API_URL || 'https://wedev-api.sky.pro/api';

const api = axios.create({
  baseURL: ApiBaseUrl,

});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (config.data) {
    delete config.headers['Content-Type'];
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response?.status === 401) {
        
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default api;
