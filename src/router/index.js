import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/TheLoginPage.vue'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import Occupancy from '@/views/Occupancy.vue'
import Notifications from '@/views/Notifications.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },

    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Booking',
        name: 'Booking',
        component: Booking
    },
    {
        path: '/Occupancy',
        name: 'Occupancy',
        component: Occupancy
    },
    {
        path: '/Notifications',
        name: 'Notifications',
        component: Notifications
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router