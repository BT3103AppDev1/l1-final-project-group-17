<template>
    <div id = "main">
        <TheNotificationsPageVue />
    </div>
</template>

<script>
    import TheNotificationsPageVue from '@/components/TheNotificationsPage.vue'
        export default {
          name: 'App',
          components:{
              TheNotificationsPageVue
          },
        }
</script>