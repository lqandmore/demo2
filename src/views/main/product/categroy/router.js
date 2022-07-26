// 普通加载路由
// import categroy from './categroy.vue'
// 懒加载路由
const categroy = () => import('./categroy.vue')
export default {
  path: '/categroy',
  name: 'categroy',
  component: categroy,
  children: [
  ]
}