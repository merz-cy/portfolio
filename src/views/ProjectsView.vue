<template>
  <div>
    <h1>Projects</h1>
    <!-- List your projects with details -->
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.githubUrl" target="_blank">GitHub Repository</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        { id: 1, title: 'Project 1', description: 'A simple Todo Application', githubUrl: 'https://github.com/merz-cy/Vue-todo' },
        { id: 2, title: 'Project 2', description: 'This is an app that generate unique student ID after you add a student credentials ', githubUrl: 'https://github.com/merz-cy/uniqueApp' },
        // Add more projects
      ],
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
