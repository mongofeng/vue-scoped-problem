
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeRoute from "./home";

const routes: Array<RouteRecordRaw> = [...HomeRoute,];


const router = createRouter({
  history: createWebHashHistory(), // 必须和qiankun激活的规则一致,
  routes,
});



export default router;
