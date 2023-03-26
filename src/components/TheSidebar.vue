<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="btn"><i class="fa fa-bars"></i></button>
</template>

<script>
    export default{
        name: "Sidebar",
        methods: {
            //Sidebar functions
        }
    }
</script>

<style>
    .btn {
        background-color: #595959;
        border: none; /* Remove borders */
        color: #ef7c00; /* White text */
        padding: 12px 16px; /* Some padding */
        font-size: 25px; /* Set a font size */
        cursor: pointer; /* Mouse pointer on hover */
    }

    /* Darker background on mouse-over */
    .btn:hover {
    background-color: RoyalBlue;
    }
</style>