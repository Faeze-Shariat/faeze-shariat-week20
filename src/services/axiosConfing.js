import axios from "axios";

const api = axios.create({baseURL : 'http://localhost:3000' ,
    withCredentials: true,
})

const getProducts = () => api.get('/products');



export default api ;
export  {getProducts};