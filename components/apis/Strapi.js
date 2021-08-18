import axios from 'axios';

const Strapi = axios.create({
  baseURL: 'https://surfskater-admin.herokuapp.com/',
  timeout: 1000,
  headers: { 'X-Custom-Header': '' },
});

export default Strapi;
