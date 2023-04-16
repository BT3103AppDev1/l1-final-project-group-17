<template>
    <div id = "main">
        <div id = "head">
            <TheSideBar/>
            <h1>Delete This Booking?</h1>
        </div>
        <TheDeletePage/>
    </div>
</template>

<script>
    import TheDeletePage from '@/components/TheDeletePage.vue'
    import TheSideBar from '@/components/sidebar/TheSideBar.vue'
    export default {
        name: 'App',
        components:{
            TheDeletePage,
            TheSideBar
        },
    }
</script>