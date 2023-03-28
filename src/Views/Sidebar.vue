<template>
    <div id = "main">
        <TheSidebarVue />
    </div>
</template>

<script>
    import TheSidebarVue from '@/components/TheSidebar.vue'
        export default {
          name: 'App',
          components:{
              TheSidebarVue
          },
        }
</script>

<style lang="scss">
:root {
 --sidebar-width: 300px;
}
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Fira sans', sans-serif;
}
body {
 background: var(--light);
}
button {
 cursor: pointer;
 appearance: none;
 border: none;
 outline: none;
 background: none;
}
.app {
 display: flex;
 main {
  flex: 1 1 0;
  padding: 2rem;
  
  @media (max-width: 768px) {
   padding-left: 6rem;
  }
 }
}
</style>