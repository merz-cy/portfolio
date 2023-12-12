<template>
  <div>
    <div class="welcome-section">
      <h1>Welcome to My Portfolio</h1>
      <p>Hello, I'm Mercy, a recent graduate with a degree in BSIT.</p>
    </div>

    <!-- Navigation Buttons -->
    <div class="navigation-buttons">
      <router-link to="/about" class="nav-button">About Me</router-link>
      <router-link to="/projects" class="nav-button">View Projects</router-link>
      <router-link to="/contact" class="nav-button">Contact Me</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.welcome-section {
  text-align: center;
  margin-top: 50px; /* Adjust the margin based on your preference */
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.nav-button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 18px; /* Adjust the font size based on your preference */
  text-decoration: none;
  color: #ffffff; /* Text color */
  background-color: #007BFF; /* Button background color */
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #0056b3; /* Hover state background color */
}
</style>
