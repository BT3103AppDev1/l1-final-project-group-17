<template>
    <div id="main">
        <TheBookingPageVue />
    </div>
    <div id = "sidebar"> 
        <TheSidebarVue />
    </div>
</template>

<script>
    import TheBookingPageVue from '@/components/TheBookingPage.vue'
    import TheSidebarVue from '@/components/sidebar/TheSidebar.vue'
    import TheDeletePage from '@/components/TheDeletePage.vue'
    export default {
        name: 'App',
        components:{
            TheBookingPageVue,
            TheSidebarVue,
            TheDeletePage
        },
    }
</script>

<style scoped>    
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

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
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
    float: right;
    position: absolute;
}
}
</style>
