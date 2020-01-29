import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Thomas from '../views/Thomas.vue'//如是模組化不須加此行

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")//程式模組化
  },
  {
    path: "/Thomas",
    name: "Thomas",
    component: Thomas
  }
];

const router = new VueRouter({
  routes
});

export default router;
