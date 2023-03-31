<template>
    <h1 id = "Current">My Current Booking</h1> <br><br>

    <button id = "im_here" type = "button" v-on:click="imHere">I'm Here </button><br><br>

    <h1 id = "Upcoming">My Upcoming Bookings</h1>

    <table id = "table" class = "auto-index">
        <tr>
            <th>Location</th>
            <th>Level</th>
            <th>Seat Number</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Options</th>
        </tr>
        <tr v-for="(row, index) in tableRows" :key="row.library">
                <td>{{ index + 1 }}</td>
                <td>{{ row.library }}</td>
                <td>{{ row.level }}</td>
                <td>{{ row.seat }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.time_start }}</td>
                <td>{{ row.time_end }}</td>
                <td>
                    <button @click="deleteBooking(row.library, useremail)" class="bwt">Delete</button>
                </td>
            </tr>
    </table><br><br>

    <div id = "buttons">
        <button id = "view_occupancy" type = "button" v-on:click="goOccupancy">View Occupancy </button><br><br>

        <button id = "new_booking" type = "button" v-on:click="goBooking">New Booking </button>
    </div>
    
</template>


<script>
    import firebaseApp from '../firebase.js';
    import { getFirestore } from 'firebase/firestore';
    import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
    import {getAuth, onAuthStateChanged} from "firebase/auth";

    const db = getFirestore(firebaseApp);


    export default {
        data () {
            return {
                useremail : '',
                tableRows : [],
            };
        },

        async mounted(){
            const delay = ms => new Promise(res => setTimeout(res, ms));
            const auth = getAuth();
                
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user
                    this.useremail = user.email
                }
            })
            while (!this.useremail) {
                console.log(this.useremail)
                await delay(100);  //delay if no useremail yet
            }
            await this.fetchAndUpdateData(this.useremail);
        },


        methods: {
            goBooking() {
                this.$router.push({ name: 'Booking' })
            },

            async fetchAndUpdateData(useremail) {
            let allDocuments = await getDocs(collection(db, String(useremail)));

            // Promise.all to ensure all async operations are over.
            // allDocuments.docs.map(async (doc) to iterate over all documents and create arrays of promises

            this.tableRows = await Promise.all(
                allDocuments.docs.map(async (doc) => {
                    let documentData = doc.data();
                    let library = documentData.library;
                    let level = documentData.level;
                    let seat = documentData.seat;
                    let date = documentData.date;
                    let time_start = documentData.time_start;
                    let time_end = documentData.time_end;
                    
                    
                    return {
                        library,
                        level,
                        seat,
                        date,
                        time_start,
                        time_end,
                    };
                }),
            );
        },
        async deleteBooking(library, user) {
            alert("You are going to delete: " + library + " " + level + " " + seat);
            await deleteDoc(doc(db, user, library));
            console.log("Booking successfully deleted!");
            
            // Refresh table data and total profit
            await this.fetchAndUpdateData(this.useremail);
        },
        }
    }
</script>

<style scoped>
    body {
        background-color: #595959 !important;
    }
    h1 {
        text-align: center;
        font: 700;
        color: #ef7c00;
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }

    th,td {
    border: 1px solid slategrey;
    text-align: center;
    padding: 8px;
    }

    /**style big button */
    #im_here, #view_occupancy, #new_booking {
        background-color:#ef7c00;
        font: 700;
        font-weight: bold;
        font-size: 1em;
        color: white;
        border-color: white;
        border-radius: 30px;
        border-radius: 30px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #im_here:hover, #view_occupancy:hover, #new_booking:hover {
        transition: 0.3s;
        background-color:#003d7c;
    }

    #buttons {
        display: flex;
        width: 50%;
        float: right;
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
        float: left
    }


</style>