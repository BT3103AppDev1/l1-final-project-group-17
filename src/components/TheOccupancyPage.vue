<template>
    <div class = "occupancy">
        <h2 id="Current occupancy"> CLB current occupancy: {{ clbOcc }}% </h2>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from "firebase/auth";

const db = getFirestore(firebaseApp);
let today = new Date().toLocaleDateString().split('')[0];
let fulltime = new Date().toLocaleDateString().split('')[1];
let time = fulltime.split(':')[0] + '00';

//get data from occupancy collection based on time 

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
            const docRefOccupancy = await doc(db, "occupancy")
            let count = docRefOccupancy.time
            this.clbOcc = count/800;
            return {
                clbOcc,
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