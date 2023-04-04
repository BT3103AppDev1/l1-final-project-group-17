import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/TheLoginPage.vue'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import Occupancy from '@/views/Occupancy.vue'
import Notifications from '@/views/Notifications.vue'
import Logout from '@/components/TheLogoutPage.vue'
import Delete from '@/views/Delete.vue'
import Edit from '@/views/Edit.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },

    {
        path: '/Home',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/Booking',
        name: 'Booking',
        component: Booking
    }
    ,
    {
        path: '/Occupancy',
        name: 'Occupancy',
        component: Occupancy
    },
    {
        path: '/Notifications',
        name: 'Notifications',
        component: Notifications
    },
    {
        path: '/Logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/Delete/:booking',
        name: 'Delete',
        component: Delete,
        props: true
    },
    {
        path: '/Edit/:booking',
        name: 'Edit',
        component: Edit,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router