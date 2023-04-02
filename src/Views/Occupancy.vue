<template>
    <h1>View Occupancy</h1>
    <div id = "main">
        <div id = "container">
            <div id = "form">
                <TheOccupancyFormVue />
            </div>
            <div id = "table">
                <TheOccupancyPageVue />
            </div>
        </div>
    </div>

    <div id = sidebar> 
        <TheSidebarVue />
    </div>
    
</template>

<script>
    import TheOccupancyPageVue from '@/components/TheOccupancyPage.vue'
    import TheSidebarVue from '@/components/sidebar/TheSidebar.vue'
    import TheOccupancyFormVue from '@/components/TheOccupancyForm.vue'
        export default {
          name: 'App',
          components:{
              TheOccupancyPageVue,
              TheSidebarVue,
              TheOccupancyFormVue
          },
        }
</script>

<style>
    #container {
        display: flex;
        width: 100%;
    }

    #form {
        width: 15%;
        height: 200px;
        float: left;
        padding: 50px;
    }

    #table {
        margin-left: 15%;
        height: 200px;
        float: right;
        padding: 100px;
    }
</style>