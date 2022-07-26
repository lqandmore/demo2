// 普通加载路由
// import department from './department.vue'
// 懒加载路由
const department = () => import('./department.vue')
export default {
  path: '/department',
  name: 'department',
  component: department,
  children: [
  ]
}