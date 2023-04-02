import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/TheLoginPage.vue'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import Occupancy from '@/views/Occupancy.vue'
import Notifications from '@/views/Notifications.vue'
import Logout from '@/components/TheLogoutPage.vue'
import Delete from '@/views/Delete.vue'
import Timetable from '@/views/Timetable.vue'

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
    },
    {
        path: '/Logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/Delete',
        name: 'Delete',
        component: Delete
    },
    {
        path: '/Timetable',
        name: 'Timetable',
        props: true,
        component: Timetable,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router