import axios from 'axios';

const API = axios.create({ baseURL: 'https://transaction-dashboard-backend-sj.onrender.com' });

export const fetchProductsBySearchAndPagination = (month, search, page) => API.get(`/products/search/${month}?searchQuery=${search || ""}&page=${page}`);


