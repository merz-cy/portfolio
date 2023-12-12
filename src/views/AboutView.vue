<template>
  <div>
    <h1>About Me</h1>
    <img src="371503285_1155693415394817_6195063421008592742_n.jpg" alt="My Profile" style="width: 200px; height: auto; border-radius: 50%;" />
    <p>I am Mercy, a passionate IT professional with a focus on backend. </p>
    <!-- Add more details about yourself -->

    <!-- Navigation Buttons -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/projects">View Projects</router-link>
    <router-link to="/contact">Contact Me</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
