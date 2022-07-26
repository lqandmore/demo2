// 普通加载路由
// import role from './role.vue'
// 懒加载路由
const role = () => import('./role.vue')
export default {
  path: '/role',
  name: 'role',
  component: role,
  children: [
  ]
}