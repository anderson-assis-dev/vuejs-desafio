import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://apibgdev.nswebservice.com.br',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {
  getProducts(storeId, limit) {
    return apiClient.post(`/store/${storeId}/products`, { limit });
  }
};
