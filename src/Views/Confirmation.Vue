<template>
    <div id = "main">
        <div id = "head">
            <TheSideBar/>
            <h1>Booking Successful!</h1>
        </div>
        <TheBookingConfirmationPage/>
    </div>
</template>

<script>
    import TheBookingConfirmationPage from '@/components/TheBookingConfirmationPage.vue'
    import TheSideBar from '@/components/sidebar/TheSideBar.vue'
    export default {
        name: 'App',
        components:{
            TheBookingConfirmationPage,
            TheSideBar
        },
    }
</script>
