import {
    createRouter,
    createWebHashHistory
} from "vue-router"

import Index from "~/pages/index.vue"
import Login from "~/pages/login.vue"
import NotFound from "~/pages/404.vue"

//路由配置
const routes = [
    {
        path:"/",
        component:Index,
        meta:{title:"后台管理"}
    },
    {
        path:"/login",
        component:Login,
        meta:{title:"登录页"}   
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound,
        meta:{title:"404NotFound"}
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router