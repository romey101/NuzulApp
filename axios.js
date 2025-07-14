import axios from 'axios';

const api = axios.create({
  baseURL: 'https://687502fadd06792b9c964e07.mockapi.io', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
