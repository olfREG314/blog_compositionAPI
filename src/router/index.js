/** @format */

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Computed from "../views/Computed.vue";
import Propss from "../views/Props.vue";
import Blog from "../views/Blog/Blog.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/computed",
    name: "computed",
    component: Computed,
  },
  {
    path: "/propss",
    name: "propss",
    component: Propss,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
