<template>
    <TheSidebarVue />
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div>
  </template>

<script>

    import TheSidebarVue from '@/components/sidebar/TheSidebar.vue'
    import { sidebarWidth } from '@/components/sidebar/state'
        export default {
          name: 'App',
          components:{
              TheSidebarVue
          },
          setup() {
    return { sidebarWidth }
  }
        }
</script>

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    #nav {
      padding: 30px;
    }
    #nav a {
      font-weight: bold;
      color: #2c3e50;
    }
    #nav a.router-link-exact-active {
      color: #efc700;
    }

    html * {
        font-family: Montserrat;
    }
</style>