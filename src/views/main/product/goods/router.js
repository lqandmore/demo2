// 普通加载路由
// import goods from './goods.vue'
// 懒加载路由
const goods = () => import('./goods.vue')
export default {
  path: '/goods',
  name: 'goods',
  component: goods,
  children: [
  ]
}