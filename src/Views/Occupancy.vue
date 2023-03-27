<template>
    <div id = "main">
        <TheOccupancyPageVue />
    </div>

    <div id = sidebar> 
        <TheSidebarVue />
    </div>
    
</template>

<script>
    import TheOccupancyPageVue from '@/components/TheOccupancyPage.vue'
    import TheSideBarVue from '@/components/TheSideBar.vue'
        export default {
          name: 'App',
          components:{
              TheOccupancyPageVue,
              TheSideBarVue
          },
        }
</script>