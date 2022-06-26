import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index.js'
import 'amfe-flexible'

createApp(App).use(router).mount('#app')
