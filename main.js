import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import '@/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'jquery'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
