<template>
    <div class = "container">
        <br><br>
        <table style="width:1px">
            <tr>
                <th>Library:</th>
                <th class="secondColumn"><!--{{ booking.library }}--></th>
            </tr>
            <tr>
                <th>Level:</th>
                <th><!--{{ booking.level }}--></th>
            </tr>
            <tr>
                <th>Date:</th>
                <th><!--{{ booking.date }}--></th>
            </tr>
            <tr>
                <th>Time:</th>
                <th><!--{{ booking.time }}--></th>
            </tr>
            <tr>
                <th>Seat Number:</th>
                <th><!--{{ booking.seat }}--></th>
            </tr>
        </table>
        <br><br>
        <div id = "buttons">
            <button id = "goHome" type = "button" v-on:click="goHome">No, back</button><br><br>
            <button id = "deleteBooking" type = "button" v-on:click="deleteBooking">Yes, delete</button>
        </div>
    </div>
</template>

<script>
    import firebaseApp from'../firebase.js';
    import { deleteField, getFirestore, updateDoc } from "firebase/firestore";
    import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
    const db = getFirestore(firebaseApp);
    

    export default {
        methods: {
            goHome() {
                this.$router.push({ name: 'Home' })
            },
            /*
            deleteBooking() {
                const bookingRef = doc(db, "bookings/20230320");
                updateDoc(bookingRef, {
                    ["central.l6.A01.1000-1100"]: deleteField()
                });
                alert("your booking has been deleted");
                this.$router.push({ name: 'Home' })
            }
            */
            deleteBooking() {
                this.booking = JSON.parse(this.$route.params.booking)
                console.log(this.booking)




                /*
                userbooking : 
                    {date: "2023-04-04",
                    library: "clb",
                    level: "level5",
                    seat: "22",
                    time_start: "1200",
                    time_end: "1700"}
                    
                let data = {}

                let timeadd = time1Int
                let timeaddstr = ""
                while (timeadd != time2Int) {
                    if (timeadd < 1000) {
                        timeaddstr = "0" + String(timeadd)
                    } else {
                        timeaddstr = String(timeadd)
                    }
                    data[timeaddstr] = this.useremail
                    timeadd += 100
                }

                console.log(data)
                */





                const bookingRef = doc(db, "bookings/20230320");
            }
        }
    }

</script>

<style>
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
        background-color: #595959;
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width:0.1%;
        white-space: nowrap;
        table-layout:auto;
    }
    .secondColumn {
        width:100%
    }

    th,td {
        border: 0px solid white;
        font-family: arial, sans-serif;
        color: white;
        text-align: left;
        padding: 8px;
        max-width:0.1%;
        white-space: nowrap;
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