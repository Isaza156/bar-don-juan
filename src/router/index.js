import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("../components/HomeView/HomeView.vue"),
  },

  {
    path: "/",
    name: "HomeView",
    component: () => import("../components/HomeView/HomeView.vue"),
  },

  {
    path: "/styles",
    name: "StylesView",
    component: () => import("../components/StylesView/StylesView.vue"),
  },
];

const router = new createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
