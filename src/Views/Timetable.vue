<template>
    <div id = "main">
        <TheOccupancyTimetableVue />
    </div>

    <div id = sidebar> 
        <TheSidebarVue />
    </div>
    
</template>

<script>
    import TheOccupancyTimetableVue from '@/components/TheOccupancyTimetable.vue'
    import TheSidebarVue from '@/components/sidebar/TheSidebar.vue'
        export default {
          name: 'App',
          components:{
              TheOccupancyTimetableVue,
              TheSidebarVue
          },
        }
</script>

