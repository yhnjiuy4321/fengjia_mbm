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
        component: ticketManage
    },
    {
        path: '/backend/login/staffManagement',
        component: staffManage
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;