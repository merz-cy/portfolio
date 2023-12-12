
<!-- App.vue -->

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'; // Adjust the path based on your project structure

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
/* Add your global styles here */
</style>


<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
