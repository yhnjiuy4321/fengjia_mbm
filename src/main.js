import { createApp } from 'vue';
import './assets/allWeb.css';
import App from './App.vue';
import router from './router';
import pagehead from './components/header.vue';
import menu from './components/menu.vue';
import footer from './components/footer.vue';
import carousel from './components/carousel.vue';
import menuhomepage from './components/menuForHomePage.vue';
import media from './components/media.vue';
import info from './components/info.vue';


const app = createApp(App);
app.use(router);
app.component('pagehead', pagehead);
app.component('menu', menu);
app.component('footer', footer);
app.component('carousel', carousel);
app.component('menuhomepage', menuhomepage);
app.component('media', media);
app.component('info', info);


app.mount('#app');