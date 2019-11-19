import axios from 'axios';
const http = axios.create({
    baseURL:'http://localhost:3000/admin'
})
axios.interceptors.response.use(res => {
    return res //=>成功的操作
}, err => {
//失败的操作:
    if (err.response.data.message) {
        //非200错误
        //返回的res.data的值 alert(err.response.data.message)
        // Notify({ type: 'warning', message: err.response.data.message });

        //  if(err.response.status === 401){
        //      //前后端统一约定401跳转回登陆界面
        //      router.push('/')
        //  }
        return Promise.reject(err)
    }
})
export default http