<template>
    <div id = "main">
        <h1> New Booking </h1>
        <TheBookingPageVue />
        <div id = "sidebar"> 
            <TheSidebarVue />
        </div>
        <br>
    </div>
</template>

<script>
    import TheBookingPageVue from '@/components/TheBookingPage.vue'
    import TheSidebarVue from '@/components/sidebar/TheSidebar.vue'

    export default {
        name: 'App',
        components:{
            TheBookingPageVue,
            TheSidebarVue,
        },
    }
</script>

<style>    
    header {
        line-height: 1.5;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    #head {
        display: flex;
        width: 50%;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    html * {
        font-family: Montserrat;
    }

    #sidebar{
        float: left;
        position: absolute;
    }

    #main {
        float: left;
    }

</style>
