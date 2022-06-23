import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path :'/',
    redirect:'/main'
  },
  {
    path:'/main',
    component:()=>import('@/views/mian.vue')
  },
  {
    path:'/login',
    component:()=>import('@/views/login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
