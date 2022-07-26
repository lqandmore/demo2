// 普通加载路由
// import menu from './menu.vue'
// 懒加载路由
const menu = () => import('./menu.vue')
export default {
  path: '/menu',
  name: 'menu',
  component: menu,
  children: [
  ]
}