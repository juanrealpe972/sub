import axios from "axios"

const instanciar = axios.create({
    baseURL:"http://localhost:6789/api",
    withCredentials:true
})

export default instanciar