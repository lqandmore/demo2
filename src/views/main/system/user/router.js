// 普通加载路由
// import user from './user.vue'
// 懒加载路由
const user = () => import('./user.vue')
export default {
  path: '/user',
  name: 'user',
  component: user,
  children: [
  ]
}