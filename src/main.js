import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueEasyLightbox from 'vue-easy-lightbox';

import './assets/main.css'

createApp(App).use(router).use(VueEasyLightbox).mount('#app')
