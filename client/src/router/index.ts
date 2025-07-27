import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Generate from "../pages/Generate.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/generate", name: "Generate", component: Generate },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
