import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
     alias:{
       "~":path.resolve(__dirname,"src")
     }
  },
  plugins: [vue(), WindiCSS()],
  //配置代理服务器，解决跨域问题
  server:{
    proxy:{
      '/api': {
        target: 'http://ceshi13.dishait.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
