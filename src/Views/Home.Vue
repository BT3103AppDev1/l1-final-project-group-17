<template>
    <div id = "main">
        <TheHomepageVue />
    </div>

    <div id = "sidebar">
        <TheSidebarVue />
    </div>
</template>

<script>
    import TheHomepageVue from '@/components/TheHomepage.vue'
    import TheSidebarVue from '@/components/sidebar/TheSidebar.vue';
        export default {
          name: 'App',
          components:{
              TheHomepageVue, 
              TheSidebarVue
          },
          data(){
    return{
      refreshComp:0
    }
   },
  methods:{
    change(){  
      this.refreshComp += 1
      }
     }
        }
</script>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
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
