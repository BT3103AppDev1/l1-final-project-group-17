import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import Delete from '@/views/Delete.vue'
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
    ,
    {
        path: '/Delete',
        name: 'Delete',
        component: Delete
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router