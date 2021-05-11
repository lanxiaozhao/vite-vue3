/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2021-05-09 09:39:32
 * @LastEditors: zhaopan
 * @LastEditTime: 2021-05-11 10:24:23
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
