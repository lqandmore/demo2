// 普通加载路由
// import list from './list.vue'
// 懒加载路由
const list = () => import('./list.vue')
export default {
  path: '/list',
  name: 'list',
  component: list,
  children: [
  ]
}