import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'

import 'tdesign-vue-next/es/style/index.css'
import "./style.css"

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
