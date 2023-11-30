import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./js/components/Dashboard.vue";
import ListAppointments from "./js/pages/appointments/ListAppointments.vue";
import ListUsers from "./js/pages/users/ListUsers.vue";
import UpdateSetting from "./js/pages/settings/UpdateSetting.vue";
import UpdateProfile from "./js/pages/profile/UpdateProfile.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/dashboard',
            name: 'admin.dashboard',
            component: Dashboard
        },
        {
            path: '/admin/appointments',
            name: 'admin.appointments',
            component: ListAppointments
        },
        {
            path: '/admin/users',
            name: 'admin.users',
            component: ListUsers
        },
        {
            path: '/admin/settings',
            name: 'admin.settings',
            component: UpdateSetting
        },
        {
            path: '/admin/profile',
            name: 'admin.profile',
            component: UpdateProfile
        }
    ]
});

export default router;
