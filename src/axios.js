import axios from "axios"
import {toast} from "~/composables/util.js"
import {getToken} from "~/composables/auth.js"
import store from "~/store"
//1.创建实例
const service = axios.create({
    // 配置文件里设置了跨域 将地址设为 http://ceshi13.dishait.cn/ 用 /api代替，所以这里变成了/api
    baseURL: '/api',
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //在header头自动添加token
  const token = getToken()
    if(token){
        config.headers["token"] = token 
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    const msg = error.response.data.msg || "请求失败"
    if(msg == "非法token，请先登录！"){
      store.dispatch("logout").finally(()=>location.reload())
    }
    toast(msg,"error")
    return Promise.reject(error);
});
 
export default service