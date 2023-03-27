import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/TheLoginPage.vue'
import Home from '@/Views/Home.vue'
import Booking from '@/Views/Booking.vue'
import Occupancy from '@/Views/Occupancy.vue'
import Notifications from '@/Views/Notifications.vue'

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