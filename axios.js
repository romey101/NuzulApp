import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6873d1b9c75558e273555bad.mockapi.io', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
