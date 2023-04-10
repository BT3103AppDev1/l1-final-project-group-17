<template>
    <div class = "container">
        <br><br>
        <table style="width:1px">
            <tr>
                <th>Library:</th>
                <th class="secondColumn">{{ this.booking.library }}</th>
            </tr>
            <tr>
                <th>Level:</th>
                <th>{{ this.booking.level }}</th>
            </tr>
            <tr>
                <th>Date:</th>
                <th>{{ this.booking.date }}</th>
            </tr>
            <tr>
                <th>Time:</th>
                <th>{{ this.booking.time_start }} to {{ this.booking.time_end }}</th>
            </tr>
            <tr>
                <th>Seat Number:</th>
                <th>{{ this.booking.seat }}</th>
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
    import { collection, getDoc, setDoc, doc, deleteDoc, FieldValue, arrayRemove } from "firebase/firestore";
    import {getAuth, onAuthStateChanged} from "firebase/auth";
    const db = getFirestore(firebaseApp);
    

    export default {
        data: function() {
            return {
                booking : JSON.parse(this.$route.params.booking)
            }
        },        
        mounted(){
            const auth = getAuth();
            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user
                    this.useremail = user.email
                }
            })
        },
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
                let timeStamps = []

                let time1Int = parseInt(this.booking.time_start)
                let time2Int = parseInt(this.booking.time_end)

                let timeadd = time1Int
                let timeaddstr = ""
                while (timeadd != time2Int) {
                    if (timeadd < 1000) {
                        timeaddstr = "0" + String(timeadd)
                    } else {
                        timeaddstr = String(timeadd)
                    }
                    timeStamps.push(timeaddstr)
                    timeadd += 100
                }

                let path0 = this.booking.date + "/" + "Occupancy"
                const occupancyRef = doc(db, path0);
                let occupancy = getDoc(occupancyRef)

                timeStamps.forEach(function (time) {
                    // count UNDEFINED!! i cant get it 
                    // let count = occupancy[time] 
                    let count = 10
                    //console.log("HERE " + count)
                    updateDoc(occupancyRef, {
                        [time]: count - 1
                    });
                });


                console.log(timeStamps)
                let path = this.booking.date + "/" + this.booking.library + "/" + this.booking.level + "/" + this.booking.seat
                console.log(path)

                timeStamps.forEach(function (time) {
                    console.log(time)
                    const bookingRef = doc(db, path);
                    console.log(bookingRef)
                    updateDoc(bookingRef, {
                        [time]: deleteField()
                    });
                });
                
                let path2 = "users/" + String(this.useremail)
                console.log(path2)

                const bookingRef2 = doc(db, path2);
                console.log(this.booking)
                updateDoc(bookingRef2, {
                    "bookings": arrayRemove(this.booking)
                });


                alert("Booking successfully deleted!");
                console.log("Booking successfully deleted!");
                this.$router.push({ name: 'Home' })


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