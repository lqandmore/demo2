// 普通加载路由
// import chat from './chat.vue'
// 懒加载路由
const chat = () => import('./chat.vue')
export default {
  path: '/chat',
  name: 'chat',
  component: chat,
  children: [
  ]
}