<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div></div>
        <div></div>
      </span>
      <span v-else>Menu</span>
      
    </h1>

    <span>
    <button @click="toggleSidebar"><span class = "material-icons">menu_open</span></button></span>
    <br><br>
    
    <SidebarLink to="/Home">Home</SidebarLink>

    <SidebarLink to="/Booking">Booking</SidebarLink>

    <SidebarLink to="/Occupancy">Occupancy</SidebarLink>

    <SidebarLink to="/Notifications">Notifications</SidebarLink>

    <br><br>
    
    <div>

     <br><br>
     <br><br>
     <br><br>
     <br><br>
     <br><br>

    <SidebarLink to="/"><span class = "material-icons">logout</span>Logout</SidebarLink>

    </div>
    
    
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #ef7c00;
  --sidebar-item-hover: #fcae1e;
  --sidebar-item-active: #d16002;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  color: black;
  height: 2.5em;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
   