<template>
    <div class = "container">
        <form id = "myform">
            <h2>New Booking</h2>

            <div class = "formli">
                <label for = "library">Library</label>
                <select name = "library" id = "library">
                    <option value = "clb">CLB</option>
                </select>
                <br><br>
                <label for = "level">Level</label>
                <select name = "level" id = "level">
                    <option value = "level3">Level 3</option>
                    <option value = "level4">Level 4</option>
                    <option value = "level5">Level 5</option>
                    <option value = "level6">Level 6</option>
                </select>
                <br><br>
                <label for = "bookingdate">Date</label>
                <input type = "date" id = "bookingdate" name = "bookingdate">
                <br><br>
                <label for = "time">Time</label>
                <select name = "time" id = "time">
                    <option value = "9am">0900</option>
                    <option value = "10am">1000</option>
                    <option value = "11am">1100</option>
                    <option value = "12pm">1200</option>
                    <option value = "1pm">1300</option>
                    <option value = "2pm">1400</option>
                    <option value = "3pm">1500</option>
                    <option value = "4pm">1600</option>
                    <option value = "5pm">1700</option>
                    <option value = "6pm">1800</option>
                    <option value = "7pm">1900</option>
                    <option value = "8pm">2000</option>
                </select>
                <br><br>
                <label for = "duration">Time</label>
                <select name = "duration" id = "duration">
                    <option value = "1hr">1 hr</option>
                    <option value = "2hr">2 hrs</option>
                    <option value = "3hr">3 hrs</option>
                    <option value = "4hr">4 hrs</option>
                    <option value = "5hr">5 hrs</option>
                    <option value = "6hr">6 hrs</option>
                    <option value = "7hr">7 hrs</option>
                    <option value = "8hr">8 hrs</option>
                    <option value = "9hr">9 hrs</option>
                    <option value = "10hr">10 hrs</option>
                    <option value = "11hr">11 hrs</option>
                    <option value = "12hr">12 hrs</option>
                </select>
                <br><br>

                <div class = "checkseats">
                    <button id = "checkseatsbutton" type = "button" v-on:click="savetofs">Check Available Seats </button>
                </div>
                <br><br>

                <div class = "back">
                    <button id = "backbutton" type = "button" v-on:click="savetofs">Back</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import firebaseApp from'../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
</script>

<style scoped>
h2{
    background-color: rgb(239, 124, 0);
}

.formli{
    display: inline-block;
    text-align: right;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
}

input:hover {
    box-shadow: 3px 3px rgb(0, 61, 124);
    border-radius: 2px;
}

.save{
    text-align: center;
}
</style>