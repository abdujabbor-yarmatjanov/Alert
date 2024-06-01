import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/commons.css'
import'./assets/css/fonts/font/stylesheet.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.css'
import Button from "primevue/button";
import Carousel from 'primevue/carousel';

const  app = createApp(App)
app.use(PrimeVue)
app.component('Button',Button)
app.component('Carousel',Carousel)
app.mount('#app')