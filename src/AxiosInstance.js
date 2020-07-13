import axios from 'axios'

const myAxios = axios.create({
    baseURL: "http://localhost:8000/api"
    // baseURL: "https://graphic-creator-backend.herokuapp.com/api"
})

// // const axiosScreenShot = axios.create({
// //     baseURL: "http://localhost:8000/api"
//     // baseURL: "https://graphic-creator-backend.herokuapp.com/api"
// })


export default myAxios