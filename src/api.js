import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.18.136:8000/api', // Centralized Base URL
  timeout: 10000,
});

export default api;
