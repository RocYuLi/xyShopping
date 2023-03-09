import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import store from "~/store"
import "./permission"
import "nprogress/nprogress.css"

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)

//Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
// ["key","value"]   ["key","value"]  ["key","value"]
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

import 'virtual:windi.css'
app.mount('#app')