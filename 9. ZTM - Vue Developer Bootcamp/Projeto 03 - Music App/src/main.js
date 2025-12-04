import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './service/firebase'

import '../public/assets/css/main.css'
import './css/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
