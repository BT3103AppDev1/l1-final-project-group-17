<template>
    <h1 id = "Current">Today's Bookings</h1> 

    <table id = "current_table" class = "auto-index">
        <tr>
            
            <th>Booking No.</th>
            <th>Location</th>
            <th>Level</th>
            <th>Seat Number</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Options</th>
            
        </tr>

        <tr v-for="(row, index) in current_tableRows" :key="row.library">
                <td>{{ index + 1 }}</td>
                <td>{{ row.library }}</td>
                <td>{{ row.level }}</td>
                <td>{{ row.seat }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.time_start }}</td>
                <td>{{ row.time_end }}</td>
                <td>
                    <p id = "deleteButton" @click="deleteBooking(row, useremail)"><u>Delete</u></p>
                </td>
            </tr>

    </table><br><br>

    <button id = "im_here" type = "button">I'm Here </button><br><br>

    <h1 id = "Upcoming">My Upcoming Bookings</h1>

    <table id = "table" class = "auto-index">
        <tr>
            <th>Booking No.</th>
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
                    <p id = "deleteButton" @click="deleteBooking(row, useremail)"><u>Delete</u></p>
                </td>
            </tr>
        
        
    </table><br><br>

    <div id = "buttons">
        <button id = "view_occupancy" type = "button" v-on:click="goOccupancy">View Occupancy </button><br><br>

        <button id = "new_booking" type = "button" v-on:click="goBooking">New Booking </button><br><br>

        <button id = "temp_update" type = "button" v-on:click="reload">Refresh Bookings </button>
    </div>
    
</template>


<script>
    import firebaseApp from '../firebase.js';
    import { getFirestore } from 'firebase/firestore';
    import { collection, getDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
    import {getAuth, onAuthStateChanged} from "firebase/auth";

    const db = getFirestore(firebaseApp);


    export default {
        data () {
            return {
                useremail : '',
                current_tableRows : [],
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
            await this.fetchCurrentBooking(this.useremail);
            await this.fetchAndUpdateData(this.useremail);
            
        },


        methods: {
            goBooking() {
                this.$router.push({ name: 'Booking' })
            },

            goOccupancy() {
                this.$router.push({ name: 'Occupancy' })
            },


            validDate(booking) {    
                let today = new Date()
                let day = today.getDate().toString()
                let month = (today.getMonth() + 1).toString()
                let year = today.getFullYear().toString()

                if (day.length == 1) {
                    day = "0" + day
                }
                if (month.length == 1) {
                    month = "0" + month
                }

                today = year + "-" + month + "-" + day
      
                return today < booking.date;
            },

            currentDate(booking) {
                let today = new Date()
                let day = today.getDate().toString()
                let month = (today.getMonth() + 1).toString()
                let year = today.getFullYear().toString()

                if (day.length == 1) {
                    day = "0" + day
                }
                if (month.length == 1) {
                    month = "0" + month
                }

                today = year + "-" + month + "-" + day

                console.log("!!!!!!")
                console.log("booking date")
                console.log(booking.date)
                console.log("today")
                console.log(today)
      
                //changed to only today and bookingdate same
                return today == booking.date;

            },

            async fetchCurrentBooking(useremail) {
                const docRefUser = await doc(db, "users", useremail)
                let userbookings = await getDoc(docRefUser)
                let userdata = userbookings.data()["bookings"]

                //filter by only bookings on that day
                let userdataC = userdata.filter(this.currentDate)

                this.current_tableRows = await Promise.all(
                    userdataC.map(async (doc) => {
                    
                   

                    let library = doc.library;
                    let level = doc.level;
                    let seat = doc.seat;
                    let date = doc.date;
                    let time_start = doc.time_start;
                    let time_end = doc.time_end;
                    
                    
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
 

            async fetchAndUpdateData(useremail) {


            const docRefUser = await doc(db, "users", useremail)
            let userbookings = await getDoc(docRefUser)
            let userdata = userbookings.data()["bookings"]
            let userdataV = userdata.filter(this.validDate)

            console.log(userdataV)

            console.log(new Date())


            // Promise.all to ensure all async operations are over.
            // allDocuments.docs.map(async (doc) to iterate over all documents and create arrays of promises

            this.tableRows = await Promise.all(
                userdataV.map(async (doc) => {
                    
                   

                    let library = doc.library;
                    let level = doc.level;
                    let seat = doc.seat;
                    let date = doc.date;
                    let time_start = doc.time_start;
                    let time_end = doc.time_end;
                    
                    
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
                this.$router.push({ name: 'Delete', params:{booking: JSON.stringify(library)}})
            },
        
            reload() {
                window.location.reload()
            }

        

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
    #im_here, #view_occupancy, #new_booking, #temp_update {
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

    #im_here:hover, #view_occupancy:hover, #new_booking:hover, #temp_update:hover {
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


