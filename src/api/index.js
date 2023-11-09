import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchProductsBySearchAndPagination = (month, search, page) => API.get(`/products/search/${month}?searchQuery=${search || ""}&page=${page}`);


