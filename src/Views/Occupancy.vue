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
    import TheSidebarVue from '@/components/TheSidebar.vue'
        export default {
          name: 'App',
          components:{
              TheOccupancyPageVue,
              TheSidebarVue
          },
        }
</script>