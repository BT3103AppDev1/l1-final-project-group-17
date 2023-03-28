import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/TheLoginPage.vue'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import Delete from '@/views/Delete.vue'
import Occupancy from '@/views/Occupancy.vue'
import Notifications from '@/views/Notifications.vue'
import Logout from '@/components/TheLogoutPage.vue'

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