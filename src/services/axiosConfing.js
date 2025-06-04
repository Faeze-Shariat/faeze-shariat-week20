import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});
export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data; //  فقط دیتا برگرده که یه آرایه باشه
};

export default api;

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization = token;
//   return config;
// });

