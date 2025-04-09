import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Posts from '../views/Posts.vue';
import Post from '../views/Post.vue'
import Settings from '../views/Settings.vue';
import Home from '../views/Home.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Login', name: 'Login', component: Login }, // Make Login the default route
  { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Posts', name: 'Engagement', component: Posts },
  { path: '/Post', name: 'Post', component: Post },
  { path: '/Settings', name: 'Settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
