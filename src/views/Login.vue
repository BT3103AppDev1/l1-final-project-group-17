<template>
    <div id = "main">
        <TheLoginPageVue />
    </div>
</template>

<script>
    import TheLoginPageVue from '@/components/TheLoginPage.vue'
        export default {
          name: 'App',
          components:{
              TheLoginPageVue
          },
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

</style>