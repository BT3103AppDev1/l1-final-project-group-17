<template>
    <h1>View Occupancy for:</h1>
</template>


<script>
    export default {
        mounted() {
            let library = this.$route.query.library
            let level = this.$route.query.level
            let bookingdate = this.$route.query.bookingdate

            console.log("library is", library);
            console.log("level is", level);
            console.log("booking data is", level);

        }
  }
</script>
