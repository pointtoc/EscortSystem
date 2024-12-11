import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// main.ts
// 终端安装：npm install @element-plus/icons-vue
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 路由挂载
app.use(router)
app.mount('#app')
