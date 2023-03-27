<template style="{'background-image':'url(src = 'assets/clb.jpeg')'}">
    <body>
        <div id = "main">
            <h1 id = "mainHead">NUS Book-a-Seat</h1>
            
            
            <div id = "page-content">
                <h3>Log in to your account</h3>
                <div id = "firebaseui-auth-container"></div>
                
                <h5>Don't have an account yet?</h5>
                <h5>Register one with us!</h5>
            </div>
        </div>
    </body>
</template>



<script>
    import firebase from '@/uifire.js'
    import 'firebase/compat/auth';
    import * as firebaseui from 'firebaseui'
    import 'firebaseui/dist/firebaseui.css'

    

    export default {
        name: "Login",

        mounted() {
            //Calling the ui instance
            var ui = firebaseui.auth.AuthUI.getInstance();
            
            if(!ui){
                //We need to create the instance only one time
                // Initiatize the FirebaseUI Widget using Firebase.
                ui = new firebaseui.auth.AuthUI(firebase.auth());
            }

            var uiConfig = {
                signInSuccessUrl: '/home',
                signInOptions: [
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                    
                ]
            }

            console.log(uiConfig)

            ui.start("#firebaseui-auth-container", uiConfig)
        }
    }
</script>

<style scoped>

#firebaseui-auth-container{
    margin-top: 20px;
    margin-bottom: 20px;
}

#pagecontent{
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
    
}

h3 {
    text-align: center;
    color: black; 
    background-color: #ef7c00;
}

h5 {
    color: black;
    text-align:center;
}

#mainHead{
    text-align: center;
    /* font-size: 50px;
    height: 100px; */
    text-shadow: 2px 2px seashell;
}

#main {
    height: 300px;
    width: 1000px;
    

}

body {
    background-image: url('../assets/clb.jpeg');
    background-size: cover;
}

#bg{
    
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%
}


</style>
