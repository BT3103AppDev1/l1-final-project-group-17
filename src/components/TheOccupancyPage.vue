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
                let today = new Date().toISOString().split('T')[0]
                let fulltime = new Date().toISOString().split('T')[1]
                let time = fulltime.split(':')[0].toString() + "00"

                console.log(time)
                console.log(today)
                const docRefOccupancy = await doc(db, "2023-04-06", "Occupancy")
                const occupancyByTime = await getDoc(docRefOccupancy)
                
                if (occupancyByTime.exists()) {
                    let count = occupancyByTime.data() 
                    this.clbOcc = 100*count[time]/800;
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