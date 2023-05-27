import axios from 'axios';
const request = axios.create({
  baseURL: 'http://127.0.0.1:1361',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export { request };
