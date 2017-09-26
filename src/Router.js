import VueRouter from 'vue-router';
import Markdown from './pages/Markdown.vue';
import App from './pages/App.vue';

const routes = [
    { path: '/app', component: App },
    { path: '/markdown', component: Markdown }
];

const router = new VueRouter({
    routes
});

export default router;
