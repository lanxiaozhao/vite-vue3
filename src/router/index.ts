/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2021-05-09 09:59:27
 * @LastEditors: zhaopan
 * @LastEditTime: 2021-05-11 10:10:22
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
