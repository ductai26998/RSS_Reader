import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import AddRSS from "../views/addRSS/AddRSS.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/channel/:id",
    name: "detailChanel",
    component: Home,
    props: true,
  },
  {
    path: "/add",
    name: "addRSS",
    component: AddRSS,
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
