import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Booking',
        name: 'Booking',
        component: Booking
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router