import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homePage",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/home.vue"),
    meta: {
      title: "首页",
      root: true,
      nav: [],
    },
  },
];

export default routes;
