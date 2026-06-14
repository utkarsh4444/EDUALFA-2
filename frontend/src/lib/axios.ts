import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '/api';

// Use the Vite proxy in development to keep frontend and backend on the same origin.
// In production, use the environment variable or relative path.


const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('edualfa_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
