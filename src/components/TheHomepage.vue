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
            <th class="options">Options</th>
        </tr>
        <tr>
            <th>{{userbooking.library}}</th>
            <th>{{userbooking.level}}</th>
            <th>{{userbooking.seat}}</th>
            <th>{{userbooking.date}}</th>
            <th>{{userbooking.time_start}}</th>
            <th>{{userbooking.time_end}}</th>
            <th>
                <div style="display:flex;flex-direction: row;">
                    <p id = "editButton" v-on:click="goEdit"><u>Edit</u></p><p> | </p><p id = "deleteButton" v-on:click="goDelete"><u>Delete</u></p>
                </div>
            </th>
        </tr>
    </table><br><br>

    <div id = "buttons">
        <button id = "view_occupancy" type = "button" v-on:click="goOccupancy">View Occupancy </button><br><br>

        <button id = "new_booking" type = "button" v-on:click="goBooking">New Booking </button>
    </div>

    <br><br>
    <br><br>

    <div id = "editAndDelete">

    </div>
    
</template>


<script>

    export default {
        data: function() {
            return {
                userbooking : 
                    {date: "2023-04-04",
                    library: "clb",
                    level: "level5",
                    seat: "22",
                    time_start: "1200",
                    time_end: "1700"}
            }
        },
        methods: {
            goBooking() {
                this.$router.push({ name: 'Booking' })
            },
            goOccupancy() {
                this.$router.push({name: 'Occupancy' })
            },            
            goDelete() {
                this.$router.push({ name: 'Delete', params:{booking: JSON.stringify(this.userbooking)}})
            },
            goEdit() {
                this.$router.push({name: 'Edit' })
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