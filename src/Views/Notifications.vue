<template>
    <div id = sidebar>
        <TheSidebarVue />
    </div>

    <div id = "main">
        <TheNotificationsPageVue />
    </div>
</template>

<script>
    import TheNotificationsPageVue from '@/components/TheNotificationsPage.vue'

    import TheSidebarVue from '@/components/TheSidebar.vue'
        export default {
          name: 'App',
          components:{
              TheNotificationsPageVue,
              TheSidebarVue
          },
        }
</script>