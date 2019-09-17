import axios from 'axios';

const api = axios.create({
  baseURL: 'http://165.22.220.204:3333',
});

export default api;
