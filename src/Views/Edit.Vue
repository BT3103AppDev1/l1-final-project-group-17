<template>
    <div id = "main">
        <div id = "head">
            <TheSideBar/>
            <h1>Edit This Booking?</h1>
        </div>
        <TheEditPage/>
    </div>
</template>

<script>
    import TheEditPage from '@/components/TheEditPage.vue'
    import TheSideBar from '@/components/sidebar/TheSideBar.vue'
    export default {
        name: 'App',
        components:{
            TheEditPage,
            TheSideBar
        },
    }
</script>

<style scoped>
    h2{
        color: rgb(239, 124, 0);
        text-align: left;
    }
        
    header {
        line-height: 1.5;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    #head {
        width: 100%;
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
}
</style>
