<template>
    <div id = "main">
        <div id ="nav">
        <router-link to = "/Home"> Home </router-link> |
        <router-link to = "/Booking"> Booking </router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default{
        name: 'App'
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');
    
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        margin-top: 30px;
    }
    #nav{
        padding : 30px
    }
    #nav a {
        font-weight : bold;
        color: #003d7c
    }
    #nav a.router-link-exact-active{
        color: #ef7c00
    }

</style>