import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Flutterwave from 'flutterwave-vue-v3'


createApp(App).use(store).use(router).use(Flutterwave, { publicKey: 'FLWPUBK_TEST-65c6459da4b3fa0ae7b0d22ca0dd10b3-X' }).mount('#app')
