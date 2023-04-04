<template>
    <div>
        <h3 id = "successful">Booking Successful!</h3>

        <!-- //input booking details -->
        <p id = "library">Library: {{library}} </p>
        <p id = "level">Level: {{level}} </p>
        <p id = "date">Date: {{date}} </p>
        <p id = "time">Time: {{timestart}} - {{timeend}} </p>
        <p id = "seat">Seat Number: {{seat}} </p>
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
        },

        mounted() {
            this.library = this.$route.query.library
            this.level = this.$route.query.level
            this.date = this.$route.query.date
            this.timestart = this.$route.query.time_start
            this.timeend = this.$route.query.time_end
            this.seat = this.$route.query.seat

        },

        data(){
            return {
                library: "",
                level: "",
                date: "",
                timestart: "",
                timeend: "",
                seat: ""
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
