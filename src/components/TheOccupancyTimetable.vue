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
    </table>
    <br><br>
</template>


<script>
    import firebaseApp from'../firebase.js';
    import { FieldValue, getDocs, getFirestore } from "firebase/firestore";
    import { collection, getDoc, doc, deleteDoc, addDoc, setDoc, updateDoc } from "firebase/firestore";

    const db = getFirestore(firebaseApp);

    export default {
        async mounted() {
            this.library = this.$route.query.library
            this.level = this.$route.query.level

            //Default formatting of date for use in database
            this.bookingdate = this.$route.query.bookingdate

            //Nicer formatting of date to show users
            this.bookingdate2 = this.bookingdate.slice(-2) + "/" + this.bookingdate.slice(5, 7) + "/" + this.bookingdate.slice(0, 4)

            await this.loadtimetable()
        },

        data(){
            return {
                library: "",
                level: "",
                bookingdate: "", //Default formatting of date for use in database
                bookingdate2: "", //Nicer formatting of date to show users
            }
        },

        methods: {
            async loadtimetable() {
                console.log("Booking details: " + this.bookingdate + "|" + this.library + "|" + this.level)
                let allDocuments = await getDocs(collection(db, String(this.bookingdate), String(this.library), String(this.level)))
                var table = document.getElementById("table");
                let seats = new Map()

                let tablelength = table.rows.length;
                for (var i = 1; i < tablelength; i++) {
                    table.deleteRow(1)
                }

                allDocuments.forEach((docs) => {
                    let timings = new Map()
                    console.log("Seat number: ",docs.id)
                    console.log("Booking data: ", docs.data())
                    for (let key in docs.data()) {
                        timings.set(key, 1)
                    }
                    seats.set(docs.id, timings)
                })

                console.log(seats)

                let count = 332

                if (this.library == "Central Library" && this.level == "Level 6") {
                    count = 301
                }

                if (this.library == "Central Library" && this.level == "Level 6 (Chinese Library)") {
                    count = 120
                }                

                for (let i = 1; i <= count; i++) {
                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);
                    var cell9 = row.insertCell(8);
                    var cell10 = row.insertCell(9);
                    var cell11 = row.insertCell(10);
                    var cell12 = row.insertCell(11);
                    var cell13 = row.insertCell(12);
                    cell1.innerHTML = "<b>Seat <b/>" + i;
                    cell2.style.backgroundColor = "white"
                    cell3.style.backgroundColor = "white"
                    cell4.style.backgroundColor = "white"
                    cell5.style.backgroundColor = "white"
                    cell6.style.backgroundColor = "white"
                    cell7.style.backgroundColor = "white"
                    cell8.style.backgroundColor = "white"
                    cell9.style.backgroundColor = "white"
                    cell10.style.backgroundColor = "white"
                    cell11.style.backgroundColor = "white"
                    cell12.style.backgroundColor = "white"
                    cell13.style.backgroundColor = "white"
                    i = i.toString()
                    if (seats.has(i)) {
                        if (seats.get(i).has("0900")) {
                            cell2.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1000")) {
                            cell3.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1100")) {
                            cell4.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1200")) {
                            cell5.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1300")) {
                            cell6.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1400")) {
                            cell7.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1500")) {
                            cell8.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1600")) {
                            cell9.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1700")) {
                            cell10.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1800")) {
                            cell11.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("1900")) {
                            cell12.style.backgroundColor = "indianred"
                        }
                        if (seats.get(i).has("2000")) {
                            cell13.style.backgroundColor = "indianred"
                        }
                    }
                }
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
