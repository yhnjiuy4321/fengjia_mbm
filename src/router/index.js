import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import QApage from '../views/QApage.vue';
import Show from '../views/show.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/homepage',
        component: Home
    },
    {
        path: '/homepage/Q&A',
        component: QApage
    },
    {
        path: '/homepage/show',
        component: Show
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;