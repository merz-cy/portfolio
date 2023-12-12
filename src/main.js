import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';
import Projects from './views/ProjectsView.vue';
import Contact from './views/ContactView.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
