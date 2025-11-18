import axios from 'axios';

const axiosBase = axios.create({
   timeout: 20000,
   baseURL: '/cosmos-kunde-kundenprofil-app/rest',
   headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Content-Type': 'application/json',
   },

   // mode: 'no-cors',
   // credentials: 'same-origin',
   // crossdomain: true,

   withCredentials: true,
});

export default axiosBase;
