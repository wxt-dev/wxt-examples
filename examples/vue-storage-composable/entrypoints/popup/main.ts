import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).provide('storage', storage).mount('#app');
