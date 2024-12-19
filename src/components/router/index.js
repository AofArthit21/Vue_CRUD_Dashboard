import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../../pages/master/dashboard.vue"; // Import dashboard.vue

import home from "../../pages/home.vue";
import profile from "../../pages/master/profile.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: dashboard,
  },
  {
    name: "home",
    path: "/home",
    component: home,
  },
  {
    name: "profile",
    path: "/profile",
    component: profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
