<template>
    <div class = "container">
        <br><br>
        <table style="width:1px">
            <tr>
                <th>Library:</th>
                <th class="secondColumn">{{ library }}</th>
            </tr>
            <tr>
                <th>Level:</th>
                <th>{{ level }}</th>
            </tr>
            <tr>
                <th>Date:</th>
                <th>{{ date }}</th>
            </tr>
            <tr>
                <th>Time:</th>
                <th>{{ timestart }} to {{ timeend }}</th>
            </tr>
            <tr>
                <th>Seat Number:</th>
                <th>{{ seat }}</th>
            </tr>
        </table>
        <br><br>
        <div id = "buttons">
            <button id = "goHome" type = "button" v-on:click="goHome">Ok</button><br><br>
        </div>
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

            console.log(this.library)
            console.log(this.level)
            console.log(this.date)
            console.log(this.timestart)
            console.log(this.timeend)
            console.log(this.seat)

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
