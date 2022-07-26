// 普通加载路由
// import overview from './overview.vue'
// 懒加载路由
const overview = () => import('./overview.vue')
export default {
  path: '/overview',
  name: 'overview',
  component: overview,
  children: [
  ]
}