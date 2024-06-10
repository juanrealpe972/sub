import axiosClient from "./axios"

export const getOfertas = () => axiosClient.get('/v1/oferta') 
export const createOferta = (data) => axiosClient.post("/v1/oferta", data)
<<<<<<< HEAD
export const getOfertasForSub = (id) => axiosClient.get(`/v1/oferta/${id}`)
export const getOfertaMayor = (id) => axiosClient.get(`/v1/ofertamayor/${id}`)
export const deleteOfertasForSub = (id, user) => axiosClient.delete(`/v1/oferta/${id}/${user}`)
=======
export const getOfertasForSub = (id) => axiosClient.get(`/v1/oferta/${id}`)
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
