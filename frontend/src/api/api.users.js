import axios from "axios";
import axiosClient from "./axios";

export const getUser = () => axiosClient.get("/v1/users")
export const createUser = (data) => axiosClient.post("/v1/users", data)
export const updateUser = (id, data) => axiosClient.put(`/v1/users/${id}`, data)
export const activarUser = (id) => axiosClient.put(`/v1/usersac/${id}`)
export const desactivarUser = (id) => axiosClient.put(`/v1/usersdes/${id}`)
export const loginUser = (data) => axios.post("http://localhost:4000/auth/login", data)