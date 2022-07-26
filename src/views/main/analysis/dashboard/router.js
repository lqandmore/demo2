// 普通加载路由
// import dashboard from './dashboard.vue'
// 懒加载路由
const dashboard = () => import('./dashboard.vue')
export default {
  path: '/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: [
  ]
}