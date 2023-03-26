<template >
    <div class = "container">
        <form id = "myform">
            <div class = "formli">
                <label for = "library1">Library</label> <br>
                <select name = "library1" id = "library1" v-on:click="updatePicture">
                    <option value = "select">--Select an option--</option>
                    <option value = "clb">CLB</option>
                </select>

                <br>

                <label for = "level1">Level</label> <br>
                <select name = "level1" id = "level1" v-on:click="updatePicture">
                    <option value = "select">--Select an option--</option>
                    <option value = "level5">Level 5</option>
                    <option value = "level6">Level 6</option>
                    <option value = "level6(Chinese Library)">Level 6 (Chinese Library)</option>
                </select>

                <br>

                <label for = "bookingdate1">Date</label> <br>
                    <input type = "date" id = "bookingdate1" name = "bookingdate1" v-on:click="validDate">
                <br>

                <div id = "timeselect">
                    <div id = "time1div">
                        <label for = "time1">Time Start</label> <br>
                        <select name = "time1" id = "time1" v-on:click="updateStart">
                            <option value = "select">--Select an option--</option>
                            <option value = "0900">0900</option>
                            <option value = "1000">1000</option>
                            <option value = "1100">1100</option>
                            <option value = "1200">1200</option>
                            <option value = "1300">1300</option>
                            <option value = "1400">1400</option>
                            <option value = "1500">1500</option>
                            <option value = "1600">1600</option>
                            <option value = "1700">1700</option>
                            <option value = "1800">1800</option>
                            <option value = "1900">1900</option>
                            <option value = "2000">2000</option>
                        </select>
                    </div>

                    <div id = "time2div">
                        <label for = "time2" v-if="startTimeEntered">Time End</label> <br>
                        <select name = "time2" id = "time2" v-if="startTimeEntered" v-on:click="validTime">
                            <option value = "select">--Select an option--</option>
                            <option id = "1000" value = "1000">1000</option>
                            <option id = "1100" value = "1100">1100</option>
                            <option id = "1200" value = "1200">1200</option>
                            <option id = "1300" value = "1300">1300</option>
                            <option id = "1400" value = "1400">1400</option>
                            <option id = "1500" value = "1500">1500</option>
                            <option id = "1600" value = "1600">1600</option>
                            <option id = "1700" value = "1700">1700</option>
                            <option id = "1800" value = "1800">1800</option>
                            <option id = "1900" value = "1900">1900</option>
                            <option id = "2000" value = "2000">2000</option>
                            <option id = "2100" value = "2100">2100</option>
                        </select>
                    </div>
                </div>
                
                <label for = "seat">Seat</label> <br>
                <input type="number" id = "seat" required="" placeholder = "Enter seat number">
                <br><br>

            </div>
        </form>

        <div class = "picture">
                <img src = "@/assets/clb_level_6.jpg" alt="Seating plan not found" v-if="clblevel6">
        </div>  
    </div>

    <div class = "buttons">
        <div class = "checkseats">
            <button id = "checkseatsbutton" type = "button" v-on:click="checkseats">Check Available Seats </button>
        </div>

        <div class = "back">
            <button id = "backbutton" type = "button" v-on:click="gobackbutton">Back</button>
        </div>
    </div>


</template>

<script>
    import firebaseApp from'../firebase.js';
    import { getFirestore } from "firebase/firestore";
    import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

    const db = getFirestore(firebaseApp);

    export default {
        data() {
            return {
                startTimeEntered: false,
                clblevel6: false,
                clblevel5: false,
                clbchinese: false
            }
        },

        methods: {
            validDate(){
                let today = new Date().toISOString().split('T')[0];
                let three_days_from_today = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                document.getElementById("bookingdate1").setAttribute('min', today);
                document.getElementById("bookingdate1").setAttribute('max', three_days_from_today)
	        },

            updatePicture(){
                let library = document.getElementById("library1").value
                let level = document.getElementById("level1").value

                this.clblevel6 = false
                this.clblevel5 = false
                this.clbchinese = false

                if (library == "clb" && level =="level6") {
                    this.clblevel6 = true
                } else if (library == "clb" && level =="level5") {
                    this.clblevel5 = true
                } else if (library == "clb" && level =="level6(Chinese Library)") {
                    this.clbchinese = true
                }
            },

            updateStart(){
                this.startTimeEntered = document.getElementById("time1").value != "select"
            },

            validTime(){
                let start = document.getElementById("time1").value

                let times = ["1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100"]

                for (let i = 0; i < times.length; i++) {
                    if (times[i] <= start || start == "select") {
                        document.getElementById(times[i]).setAttribute("disabled", "")
                    } else {
                        document.getElementById(times[i]).removeAttribute("disabled")
                    }
                }
            },

            async checkseats() {
                let library = document.getElementById("library1").value
                let level = document.getElementById("level1").value
                let bookingdate = document.getElementById("bookingdate1").value
                //2023-03-27 -> format of bookingdate
                let time1 = document.getElementById("time1").value
                let time2 = document.getElementById("time2").value
                let seat = document.getElementById("seat").value

                console.log(seat)

                if (library == "select" || level == "select" || time1 == "select" || time2 == "select" || bookingdate == "" || seat == "select") {
                    alert("Some fields are not selected!")
                    return
                }

                if (time1 >= time2) {
                    alert("End time must be later than start time! (End time is " + time2 + ", it should be later than " + time1+ ")")
                    return
                }
       

                // try{
                //     const docRef = await setDoc(doc(db, String(this.useremail), this.library),{
                //         Library: this.library , Level : this.level, Bookingdate : this.bookingdate, 
                //         Time : this.time, Duration : this.duration
                //     })
                //     console.log(docRef)
                //     document.getElementById('myform').reset();
                //     this.$emit("added")  
                // }
                // catch(error) {
                //     console.error("Error adding document: ", error);
                // }

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

    #time1div,
    #time2div{
        display:inline-block;
        width:50%;
        vertical-align: top;
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

    select {
        margin-bottom: 10px;
    }

    input{
        margin-bottom: 10px;
    }

    select:hover {
        box-shadow: 3px 3px rgb(0, 61, 124);
        border-radius: 2px;
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

    .container {
        display: flex;
        width: 50%;
    }

    img{
        width:1000%;
        max-width:60rem;
    }

    .picture{
        padding-left: 20px
    }

    .timeselect {
        display: flex;
        width: 40%;
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