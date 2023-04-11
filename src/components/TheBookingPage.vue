<template >
    <h1> New Booking </h1>
    <div class = "container">
        <form id = "myform">
            <div class = "formli">
                <label for = "library1">Library</label> <br>
                <select name = "library1" id = "library1" v-on:click="updatePicture">
                    <option value = "select">--Select an option--</option>
                    <option value = "Central Library">Central Library</option>
                </select>

                <br>

                <label for = "level1">Level</label> <br>
                <select name = "level1" id = "level1" v-on:click="updatePicture">
                    <option value = "select">--Select an option--</option>
                    <option value = "Level 5">Level 5</option>
                    <option value = "Level 6">Level 6</option>
                    <option value = "Level 6 (Chinese Library)">Level 6 (Chinese Library)</option>
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
                <img src = "@/assets/clb_level_5.jpg" alt="Seating plan not found" v-if="clblevel5">
                <img src = "@/assets/clb_chinese_6.jpg" alt="Seating plan not found" v-if="clbchinese">
        </div>  
    </div>

    <div class = "buttons">
        <div class = "checkseats">
            <button id = "checkseatsbutton" type = "button" v-on:click="bookseats">Book Seat</button>
        </div>

        <div class = "back">
            <button id = "backbutton" type = "button" v-on:click="gobackbutton">Back</button>
        </div>
    </div>

</template>

<script>
    import firebaseApp from'../firebase.js';
    import { FieldValue, getFirestore } from "firebase/firestore";
    import { collection, getDoc, doc, deleteDoc, addDoc, setDoc, updateDoc } from "firebase/firestore"; //import { query, where, getDocs } from "firebase/firestore"
    import {getAuth, onAuthStateChanged} from "firebase/auth";

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
            gobackbutton() {
                this.$router.push({ name: 'Home',})
            },
            validDate(){
                // let today = new Date().toISOString().split('T')[0];
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

                // let two_days_from_today = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                let two_days_from_today = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
                day = two_days_from_today.getDate().toString()
                month = (two_days_from_today.getMonth() + 1).toString()
                year = two_days_from_today.getFullYear().toString()

                if (day.length == 1) {
                    day = "0" + day
                }
                if (month.length == 1) {
                    month = "0" + month
                }

                two_days_from_today = year + "-" + month + "-" + day

                document.getElementById("bookingdate1").setAttribute('min', today);
                document.getElementById("bookingdate1").setAttribute('max', two_days_from_today)
	        },

            updatePicture(){
                let library = document.getElementById("library1").value
                let level = document.getElementById("level1").value

                this.clblevel6 = false
                this.clblevel5 = false
                this.clbchinese = false

                if (library == "Central Library" && level =="Level 6") {
                    this.clblevel6 = true
                } else if (library == "Central Library" && level =="Level 5") {
                    this.clblevel5 = true
                } else if (library == "Central Library" && level =="Level 6 (Chinese Library)") {
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

            validUserBooking(booking, time1, time2) {
                // New booking       .....  
                // Old Booking     .....   
                let condition1 = booking["time_start"] <= time1 && booking["time_end"] >= time1
                // New booking    .....             OR    .....
                // Old booking      .....           OR  ..........
                let condition2 = booking["time_start"] <= time2 && booking["time_end"] >= time2
                // New booking   ............
                // Old booking      .....
                let condition3 = booking["time_start"] >= time1 && booking["time_end"] <= time2
                return condition1 || condition2 || condition3
            },

            async bookseats() {
                let library = document.getElementById("library1").value
                let level = document.getElementById("level1").value
                let bookingdate = document.getElementById("bookingdate1").value
    
                // let bookingdatearr = bookingdate.split("-")
                // let day = bookingdatearr[0]
                // let month = bookingdatearr[1]
                // let year = bookingdatearr[2]

                // if (day.length == 1) {
                //     day = "0" + day
                // }

                // if (month.length == 1) {
                //     month = "0" + month
                // }

                // bookingdate = year + "-" + month + "-" + day
                console.log(bookingdate)

                //2023-03-27 -> format of bookingdate
                let time1 = document.getElementById("time1").value
                let time2 = document.getElementById("time2").value
                let seat = document.getElementById("seat").value

                let time1Int = parseInt(time1)
                let time2Int = parseInt(time2)

                // Check if fields are filled in properly

                if (library == "select" || level == "select" || time1 == "select" || time2 == "select" || bookingdate == "" || seat == "select") {
                    alert("Some fields are not selected!")
                    return
                }

                if (time1 >= time2) {
                    alert("End time must be later than start time! (End time is " + time2 + ", it should be later than " + time1+ ")")
                    return
                } 

                //Check if seat is valid
                
                try {
                    let seatint = parseInt(seat)

                    if (library == "Central Library" && level == "Level 5") {
                        if (seatint > 332 || seatint < 1) {
                            alert("Invalid Seat")
                            return
                        }
                    }

                    if (library == "Central Library" && level == "Level 6") {
                        if (seatint > 301 || seatint < 1) {
                            alert("Invalid Seat")
                            return
                        }
                    }

                    if (library == "Central Library" && level == "Level 6 (Chinese Library)") {
                        if (seatint > 120 || seatint < 1) {
                            alert("Invalid Seat")
                            return
                        }
                    }

                    seat = seatint

                } catch(error) {
                    alert("Invalid Seat")
                    return
                }
       

                // Check if the seat is already booked
                let seatbooked = false

                try {
                    const docRefBookings = await doc(db, String(bookingdate), String(library), String(level), String(seat))
                    let seatbookings = await getDoc(docRefBookings)

                    if (seatbookings.exists()) {
                        let timeadd = time1Int
                        let timestocheck = []

                        while (timeadd != time2Int) {
                            if (timeadd < 1000) {
                                timestocheck.push("0" + String(timeadd))
                            } else {
                                timestocheck.push(String(timeadd))
                            }
                            timeadd += 100
                        }

                        for (let i = 0; i < timestocheck.length; i++) {
                            if(seatbookings.data()[timestocheck[i]]){ //seat is taken
                                seatbooked = true
                                break
                            } //else not taken
                        }
                    }
                } catch(error) {
                    console.error(error);
                }

                // Check if user already has a booking at this time
                let userbooked = false

                try{
                    const docRefUser = await doc(db, "users", String(this.useremail))
                    let userbookings = await getDoc(docRefUser)

                    if (userbookings.exists()) {
                        let userdata = userbookings.data()["bookings"]
                        //Filter out different dates
                        userdata = userdata.filter(booking => booking["date"] == bookingdate)
                        //Filter out non-clashing times
                        console.log("CHECK VALID USER BOOKING")
                        userdata = userdata.filter(booking => this.validUserBooking(booking, time1, time2))

                        if (userdata.length > 0) {
                            userbooked = true
                        }
                    }

                } catch(error) {
                    console.log(error)
                }

                try{
                    // Save to db (bookings)
                    if (seatbooked) {
                        alert("Seat is already booked! Please choose another seat or time!")
                        return
                    } else if (userbooked) {
                        alert("You have already booked a seat in this time period!")
                        return
                    }
                    const docRefBookings = await doc(db, String(bookingdate), String(library), String(level), String(seat))
                    const docRefUser = await doc(db, "users", String(this.useremail))

                    console.log(bookingdate)

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

                    console.log("Set in booking dates")
                    console.log(data)

                    await setDoc(docRefBookings, data);

                    //Add to occupancy 
                    const docRefOccupancy = await doc(db, String(bookingdate), "Occupancy")
                    let dataOcc = {}

                    //how to initialise occupancy for each date
                    //occupancy doc resets 
                    //console.log("HEREEE" + occupancy.exists())

                    //if (!occupancy.exists()) {
                        //await setDoc(docRefOccupancy, {})
                    //} 
                    //if (!occupancy.data()) {
                        //await setDoc(docRefOccupancy, {})
                    //}

                    // timeadd starts off as start time 
                    // time2Int is the endtime

                    let occupancy = await getDoc(docRefOccupancy)

                    timeadd = time1Int
                    while (timeadd != time2Int) {
                        if (timeadd < 1000) {
                            timeaddstr = "0" + String(timeadd)
                        } else {
                            timeaddstr = String(timeadd)
                        }

                        if (!occupancy.exists()) {
                            dataOcc[timeaddstr] = 1
                            await setDoc(docRefOccupancy, dataOcc) 
                  
                        } else if (timeaddstr in occupancy.data()) {
                            let count = occupancy.data()[timeaddstr]
                            dataOcc[timeaddstr] = count + 1
                            await setDoc(docRefOccupancy, dataOcc, { merge:true }) 
      
                        } else {
                            dataOcc[timeaddstr] = 1
                            await setDoc(docRefOccupancy, dataOcc, { merge:true }) 
                        }
                        timeadd += 100
                    }
                    // check
                    console.log("after")
                    
                    // Add to user
                    let userbookings = await getDoc(docRefUser)
                    let userbooking = 
                        {date: bookingdate,
                        library: library,
                        level: level,
                        seat: seat,
                        time_start: time1,
                        time_end: time2}

                    console.log("Set in user")
                    console.log(userbooking)

                    if (userbookings.exists()) {
                        let userdata = userbookings.data()["bookings"]
                        userdata.push(userbooking)
                        await setDoc(docRefUser,
                            {bookings: userdata}
                        )
                    } else {
                        await setDoc(docRefUser,
                            {bookings: [userbooking]}
                        )
                    }


                    this.$router.push({ 
                        name: 'Confirmation',
                        query: {
                            date: bookingdate,
                            library: library,
                            level: level,
                            seat: seat,
                            time_start: time1,
                            time_end: time2}
                    })

                }
                
                catch(error) {
                    console.error("Error adding document: ", error);
                }
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
        text-align: center;
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

    #checkseatsbutton {
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

    #checkseatsbutton:hover {
        transition: 0.3s;
        background-color:#f3b97b;
    }

    #backbutton {
        background-color:#003d7c;
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

    #backbutton:hover {
        transition: 0.3s;
        background-color:#5c96cf;
    }
</style>