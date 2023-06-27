// import './assets/main.css'
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

import 'aos/dist/aos.css'
import './assets/main.css'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(Vue3Lottie)
app.mount('#app')
