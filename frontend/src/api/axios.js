import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9722"
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  
  // Asignar el token al header 'Authorization' usando el método 'set'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosClient;
