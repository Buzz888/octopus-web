import axios from 'axios'
const http = axios.create({
    baseURL:process.env.VUE_APP_API_URL || '/web'
        //baseURL:'http://localhost:3000/web'
    
})
export default http