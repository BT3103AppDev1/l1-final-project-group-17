<template>
    <div>
        <h3 id = "successful">Booking Successful!</h3>

        <!-- //input booking details -->
        <p id = "library">Library:</p>
        <p id = "level">Level:</p>
        <p id = "date">Date:</p>
        <p id = "time">Time:</p>
        <p id = "seat">Seat Number:</p>
    </div>

    <div class = "buttons">
        <button id = "goHome" type = "button" v-on:click="goHome">Ok</button>
    </div>
</template>

<script>
    import firebaseApp from'../firebase.js';
    import { getFirestore } from "firebase/firestore";
    import { collection, getDoc, doc } from "firebase/firestore";

    const db = getFirestore(firebaseApp);

    export default {
        methods: {
            goHome() {
                this.$router.push({ name: 'Home' })
            }
        }
    }
</script>

<style scoped>
    .buttons {
        display: flex;
        width: 50%;
    }

    button {
        background-color:#ef7c00;
        font: 700;
        font-weight: bold;
        font-size: 1em;
        color: white;
        border-color: white;
        border-radius: 30px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    button:hover {
        transition: 0.3s;
        background-color:#003d7c;
    }
</style>
