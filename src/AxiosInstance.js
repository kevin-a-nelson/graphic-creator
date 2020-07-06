import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: "http://localhost:8000/api"
    baseURL: "https://graphic-creator-backend.herokuapp.com/api"
})

export default axiosInstance