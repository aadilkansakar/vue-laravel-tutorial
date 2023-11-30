import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./js/components/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/dashboard',
            name: 'admin.dashboard',
            component: Dashboard
        }
    ]
});

export default router;
