import axios from 'axios';
const request = axios.create({
  baseURL: 'https://api.upme.cloud',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { request };
