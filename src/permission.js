import router from "~/router"
import {getToken} from "~/composables/auth.js"
import {toast,showFullLoading,hideFullLoading} from "~/composables/util.js"
import store from "./store"
//全局前置守卫
router.beforeEach(async (to,from,next)=>{
   //显示loading
   showFullLoading()
   //获取token
   const token = getToken()
   //没有登录强制跳转回登录页
   if(!token && to.path !="/login") {
    toast("请先登录","error")
    return next({path:"/login"})
   }
   //已登录防止重复登录
   if(token && to.path == "/login"){
    toast("请勿重复登录","error")
    return next ({path:from.path ? from.path:"/"})
   }
   // 如果用户登录，自动获取用户信息，并存储在vuex中
   if(token){
    await store.dispatch("getinfo")
   }
   const title = (to.meta.title ? to.meta.title : "后台管理系统")+ "-喜悦商城后台管理系统"
   document.title = title
   next()
})


//全局后置守卫
router.afterEach((to, from) => {
  //关闭全局loading
  hideFullLoading()
})