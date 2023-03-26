<template>
    <div class = "container">
        <form id = "myform">
            <div class = "formli">
                <label for = "library1">Library</label> <br>
                <select name = "library1" id = "library1">
                    <option value = "clb">CLB</option>
                </select>
                <br><br>
                <label for = "level1">Level</label> <br>
                <select name = "level1" id = "level1">
                    <option value = "level3">Level 3</option>
                    <option value = "level4">Level 4</option>
                    <option value = "level5">Level 5</option>
                    <option value = "level6">Level 6</option>
                </select>
                <br><br>
                <label for = "bookingdate1">Date</label> <br>
                <input type = "date" id = "bookingdate1" name = "bookingdate1">
                <br><br>
                <label for = "time1">Time Start</label> <br>
                <select name = "time1" id = "time1">
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
                <label for = "duration1">Time End</label> <br>
                <select name = "duration1" id = "time2">
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
                    <option value = "8pm">2100</option>
                </select>
                <br><br>
            </div>
        </form>

        <div class = "buttons">
                <div class = "checkseats">
                    <button id = "checkseatsbutton" type = "button" v-on:click="checkseats">Check Available Seats </button>
                </div>
                

                <div class = "back">
                    <button id = "backbutton" type = "button" v-on:click="gobackbutton">Back</button>
                </div>
        </div>
    </div>
</template>

<script>
import firebaseApp from'../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

//creating the save function

export default {
    methods: {
        async checkseats() {
            let library = document.getElementById("library1").value
            let level = document.getElementById("level1").value
            let bookingdate = document.getElementById("bookingdate1").value
            let time = document.getElementById("time1").value
            let duration = document.getElementById("duration1").value

            alert(" Saving your data for booking ")

            try{
                const docRef = await setDoc(doc(db, String(this.useremail), this.library),{
                    Library: this.library , Level : this.level, Bookingdate : this.bookingdate, 
                    Time : this.time, Duration : this.duration
                })
                console.log(docRef)
                document.getElementById('myform').reset();
                this.$emit("added")  
            }
            catch(error) {
                console.error("Error adding document: ", error);
            }

        },

        checkseats(){
            // Navigate to seat booking page
            return
        },

        gobackbutton() {
            this.$router.push({ name: 'Home' })
        }
    }
}


</script>

<style scoped>
    #myform{
        text-align: left;
        margin-left: 20px;
    }

    .formli{
        display: inline-block;
        text-align: left;
    }

    form {
        text-align: right;
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