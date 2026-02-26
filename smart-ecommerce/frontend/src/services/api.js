import axios from 'axios';

const api = axios.create({
    baseURL: '/api', // Proxied in Vite
    withCredentials: true,
});

export default api;
