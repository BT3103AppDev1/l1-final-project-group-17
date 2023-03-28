<template>
 
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
         rel="stylesheet">
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
   
     <div class="logo">
      
      <h3>Menu</h3>
     </div>
   
     <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
       <span class="material-icons">menu</span>
      </button>
     </div>
   
     <div class="menu">
      <router-link to="/Home" class="button">
       <span class="material-icons">home</span>
       <span class="text">Home</span>
      </router-link>
      <router-link to="/Booking" class="button">
       <span class="material-icons">bookmark_add</span>
       <span class="text">Book</span>
      </router-link>
      <router-link to="/Occupancy" class="button">
       <span class="material-icons">event_seat</span>
       <span class="text">View Occupancy</span>
      </router-link>
      <router-link to="/Notifications" class="button">
       <span class="material-icons">notifications</span>
       <span class="text">Notifications</span>
      </router-link>
     </div>
   
     <div class="flex"></div>
   
     <div class="menu">
      <router-link to="/Logout" class="button">
       
       <span class="text">Log Out</span>
      </router-link>
     </div>
    </aside>
   
   </template>
   
   <script setup>
   import { ref } from 'vue'
   
   const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
   const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
   }
   </script>
   
   <style lang="scss" scoped>
   
   
   aside {
    display: flex;
    flex-direction: column;
    background-color: #434343ff;
    overflow: hidden;
    color: #003d7c;
    width: calc(2rem + 32px);
    
    min-height: 100vh;
    
    padding: 1rem;
    transition: 0.2s ease-in-out;
    .flex {
     flex: 1 1 0%;
    }
    .logo {
     margin-bottom: 1rem;
     img {
      width: 2rem;
     }
    }
    .menu-toggle-wrap {
     display: flex;
     justify-content: flex-end;
     margin-bottom: 1rem;
     position: relative;
     top: 0;
     transition: 0.2s ease-in-out;
     .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
       font-size: 2rem;
       color: #FFFFFF;
       transition: 0.2s ease-out;
      }
      
      &:hover {
       .material-icons {
        color: #FFFFFF;
        transform: translateX(0.5rem);
       }
      }
     }
    }
    h3, .button .text {
     opacity: 0;
     transition: opacity 0.3s ease-in-out;
    }
    h3 {
     color: #FFFFFF;
     font-size: 0.875rem;
     margin-bottom: 0.5rem;
     text-transform: uppercase;
     float: left;
    }
    .menu {
     
     margin: 0 -1rem;
     .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      .material-icons {
       font-size: 2rem;
       color: #FFFFFF;
       transition: 0.2s ease-in-out;
      }
      .text {
       color: #FFFFFF;
       transition: 0.2s ease-in-out;
      }
      &:hover {
       background-color: #595959;
       .material-icons, .text {
        color: #003d7c;
       }
      }
      &.router-link-exact-active {
       
       border-right: 5px solid #ef7c00;
       .material-icons, .text {
        color: #ef7c00;
       }
      }
     }
    }
    .footer {
     opacity: 0;
     transition: opacity 0.3s ease-in-out;
     p {
      font-size: 0.875rem;
      color: #003d7c;
     }
    }
    &.is-expanded {
     width: var(--sidebar-width);
     .menu-toggle-wrap {
      top: -3rem;
     
      .menu-toggle {
       transform: rotate(-180deg);
      }
     }
     h3, .button .text {
      opacity: 1;
     }
     .button {
      .material-icons {
       margin-right: 1rem;
      }
     }
     .footer {
      opacity: 0;
     }
    }
    @media (max-width: 1024px) {
     position: absolute;
     z-index: 99;
    }
   }
   </style>