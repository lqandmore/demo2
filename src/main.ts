import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import './assets/css/index.css'
import 'normalize.css'
// import '@/service/axios-demo.ts'

import globalRegister from './global'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
globalRegister(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(store)
setupStore()
app.mount('#app')
