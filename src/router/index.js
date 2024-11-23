import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import QApage from '../views/QApage.vue';
import Show from '../views/show.vue';
import News from '../views/news.vue';
import Article from '../views/new_article.vue';
import VenueTour from '../views/venueTour.vue';
import service_rules from '../views/service_rules.vue';
import searchTicket from '../views/searchTicket.vue';
import login from '../views/backend/loginView.vue';
import ticketManage from '../views/backend/ticketManagement.vue';
import staffManage from '../views/backend/staffManagement.vue';
import { authState } from '/Backend/auth.js';




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
        name: 'Q&A問答',
        component: QApage
    },
    {
        path: '/homepage/Show',
        name: '表演活動',
        component: Show
    },
    {
        path: '/homepage/News',
        name : '最新消息',
        component: News
    },
    {
        path: '/homepage/News/article/:id',
        name: '內文',
        component: Article
    },
    {
        path: '/homepage/venueTour',
        name: '場館導覽',
        component: VenueTour
    },
    {
        path: '/homepage/service_rules',
        name: '規範&服務',
        component: service_rules
    },
    {
        path: '/homepage/searchTicket',
        name: '訂票查詢',
        component: searchTicket
    },
    {
        path: '/backend/login',
        component: login
    },
    {
        path: '/backend/login/ticketManagement',
        component: ticketManage,
        meta: { requiresAuth: true }

    },
    {
        path: '/backend/login/staffManagement',
        component: staffManage,
        meta: { requiresAuth: true }
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});




export default router;


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !authState.isAuthenticated) {
        next('/backend/login'); // Redirect to login page if not authenticated
    } else {
        next(); // Proceed to the requested route if authenticated or if the route does not require authentication
    }
});
