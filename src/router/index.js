import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Orders from "@/components/Orders.vue";
import Bots from "@/components/Bots.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard },
  { path: "/orders", component: Orders },
  { path: "/bots", component: Bots },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
