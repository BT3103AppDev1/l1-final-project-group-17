<template>
    <div class = "container">
        <form id = "myform">
            <div class = "formli">
                <label for = "library1">Library</label> <br>
                <select name = "library1" id = "library1" v-on:click="updatePicture">
                    <option value = "select">--Select an option--</option>
                    <option value = "clb">Central Library</option>
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
                <br><br>

            </div>
        </form>
    </div>

    <div id = "buttons">
        <div class = "viewavailablility">
            <button id = "viewavailablilitybutton" type = "button" v-on:click="viewavailablility">View Seat Availability</button>
        </div>

        <div class = "back">
            <button id = "backbutton" type = "button" v-on:click="gobackbutton">Back</button>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            validDate(){
                let today = new Date().toISOString().split('T')[0];
                let three_days_from_today = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                document.getElementById("bookingdate1").setAttribute('min', today);
                document.getElementById("bookingdate1").setAttribute('max', three_days_from_today)
	        },

            gobackbutton() {
                this.$router.push({ name: 'Home' })
            },

            viewavailablility(){

            }
        }
    }
</script>

<style>
    #buttons {
        display: flex;
        width: 100%;
    }

    #viewavailablilitybutton {
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

    #viewavailablilitybutton:hover {
        transition: 0.3s;
        background-color:#eb9e4c;
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
        background-color:#2775c4;
    }
</style>
