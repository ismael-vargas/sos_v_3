import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.31:9000', // Dirección IP de tu computadora
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;