import axios from 'axios';

const Strapi = axios.create({
  baseURL: 'http://localhost:1337/',
  timeout: 1000,
  headers: { 'X-Custom-Header': '' },
});

export default Strapi;
