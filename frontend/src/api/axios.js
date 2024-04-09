import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9722",
  withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
  const token = localStorage.getItem("token")
  request.headers = `${token}`
  return request
})

export default axiosClient;
