import axios from "axios"

export const getSubastasRequest = async () =>
    await axios.get("http://localhost:6789/sub")

export const createSubastaRequest = async (subasta) =>
    await axios.post("http://localhost:6789/sub", subasta)

export const deleteSubastaRequest = async (id) =>
    await axios.delete(`http://localhost:6789/sub/${id}`)

export const getSubastaRequest = async (id) =>
    await axios.get(`http://localhost:6789/sub/${id}`)

export const updateSubastaRequest = async (id, newFields) =>
    await axios.put(`http://localhost:6789/sub/${id}`, newFields)