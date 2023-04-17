<template>
    <div id = "occupancy1">
        <table id = "occupancytable">
            <tr>
                <th></th>
                <th>Central Library</th>
            </tr>

            <!--link to database and get occupancy. refer to profit display vue-->
            <tr>
                <td>Library occupancy</td>
                <td> {{ clbOcc }}%</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import firebaseApp from '../firebase.js';
    import { getFirestore } from 'firebase/firestore';
    import { collection, getDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
    import {getAuth, onAuthStateChanged} from "firebase/auth";

    const db = getFirestore(firebaseApp)

    export default {
        data() {
                return {
                    clbOcc: 0
                }
            },

        async mounted(){
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await this.fetchCurrCount();
            //deleted the auth user part cos occupancy is constant across all users
        },

        methods: {
            async fetchCurrCount() {
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
                let currTime = new Date().toString().split(" ")[4].split(":")
                //let currTime = ["08", "45", "00"]
                let time = currTime[0] + "00"

                console.log(time)
                console.log(today)

                const docRefOccupancy = await doc(db, today, "Occupancy")
                const occupancyByTime = await getDoc(docRefOccupancy)
                
                if (occupancyByTime.exists()) {
                    let count = occupancyByTime.data()
                    console.log("count")
                    console.log(count)
                    let value = 100*count[time]/800;
                    console.log("value")
                    console.log(value)

                    if (isNaN(value)) {
                        this.clbOcc = 0
                    } else {
                        this.clbOcc = value
                    }

                    console.log(this.clbOcc)
                }

                return {
                };
            },
        },
    };
</script>


<style scoped>
h1{
    color: azure;
}
</style>