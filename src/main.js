import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Vue3Toasity);
app.mount('#app');
