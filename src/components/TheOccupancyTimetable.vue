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
                bookingdate2: "" //Nicer formatting of date to show users
            }
        },

        methods: {

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
