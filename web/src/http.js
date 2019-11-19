import axios from 'axios'
const http = axios.create({
    baseURL:'http://localhost:3000/web'
})
export default http