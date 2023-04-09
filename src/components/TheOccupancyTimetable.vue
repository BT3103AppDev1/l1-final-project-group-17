<template>
    <h1>View Occupancy for: {{library }} {{level }}, {{bookingdate2 }}</h1>

    <table id = "table" class = "auto-index">
        <tr>
            <th>Seat/Time</th>
            <th>0900 - 1000</th>
            <th>1000 - 1100</th>
            <th>1100 - 1200</th>
            <th>1200 - 1300</th>
            <th>1300 - 1400</th>
            <th>1400 - 1500</th>
            <th>1500 - 1600</th>
            <th>1600 - 1700</th>
            <th>1700 - 1800</th>
            <th>1800 - 1900</th>
            <th>1900 - 2000</th>
            <th>2000 - 2100</th>
        </tr>
        <tr v-for="(seat, index) in tableRows" :key="index">
            <th>{{ seat }}</th>
            <td id = "9am" :style="{backgroundColor: active1 ? 'indianred' : 'white'}"></td>
            <td id = "10am" :style="{backgroundColor: active2 ? 'indianred' : 'white'}"></td>
            <td id = "11am" :style="{backgroundColor: active3 ? 'indianred' : 'white'}"></td>
            <td id = "12pm" :style="{backgroundColor: active4 ? 'indianred' : 'white'}"></td>
            <td id = "1pm" :style="{backgroundColor: active5 ? 'indianred' : 'white'}"></td>
            <td id = "2pm" :style="{backgroundColor: active6 ? 'indianred' : 'white'}"></td>
            <td id = "3pm" :style="{backgroundColor: active7 ? 'indianred' : 'white'}"></td>
            <td id = "4pm" :style="{backgroundColor: active8 ? 'indianred' : 'white'}"></td>
            <td id = "5pm" :style="{backgroundColor: active9 ? 'indianred' : 'white'}"></td>
            <td id = "6pm" :style="{backgroundColor: active10 ? 'indianred' : 'white'}"></td>
            <td id = "7pm" :style="{backgroundColor: active11 ? 'indianred' : 'white'}"></td>
            <td id = "8pm" :style="{backgroundColor: active12 ? 'indianred' : 'white'}"></td>
        </tr>
    </table>
    <div class = "test">
            <button id = "testbutton" type = "button" v-on:click="loadtimetable">Load</button>
    </div>
    <br><br>
</template>


<script>
    import firebaseApp from'../firebase.js';
    import { FieldValue, getDocs, getFirestore } from "firebase/firestore";
    import { collection, getDoc, doc, deleteDoc, addDoc, setDoc, updateDoc } from "firebase/firestore";
    import {getAuth, onAuthStateChanged} from "firebase/auth";

    const db = getFirestore(firebaseApp);

    export default {
        mounted() {
            this.library = this.$route.query.library
            this.level = this.$route.query.level

            //Default formatting of date for use in database
            this.bookingdate = this.$route.query.bookingdate

            //Nicer formatting of date to show users
            this.bookingdate2 = this.bookingdate.slice(-2) + "/" + this.bookingdate.slice(5, 7) + "/" + this.bookingdate.slice(0, 4)
        },

        data(){
            return {
                library: "",
                level: "",
                bookingdate: "", //Default formatting of date for use in database
                bookingdate2: "", //Nicer formatting of date to show users
                tableRows: [],
                active1: false,
                active2: false,
                active3: false,
                active4: false,
                active5: false,
                active6: false,
                active7: false,
                active8: false,
                active9: false,
                active10: false,
                active11: false,
                active12: false,
            }
        },

        methods: {
            loadtimetable() {
                // let allDocuments = await getDocs(collection(db, String(bookingdate), String(library), String(level)));

                for (let i = 1; i <= 332; i++) {
                        this.tableRows.push("Seat " + i)
                    }

                // if (library == "Central Library" && level == "Level 6") {
                //     for (let i = 1; i <= 301; i++) {
                //         this.tableRows.push("Seat " + i)
                //     }
                // }

                // if (library == "Central Library" && level == "Level 6 (Chinese Library)") {
                //     for (let i = 1; i <= 120; i++) {
                //         this.tableRows.push("Seat " + i)
                //     }
                // }
            }

        }
    }
</script>

<style>
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
</style>
