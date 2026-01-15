import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import Lenis from 'lenis'



// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

createApp(App).use(router).mount('#app')
