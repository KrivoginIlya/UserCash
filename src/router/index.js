import Vue from "vue";
import VueRouter from "vue-router";
import PageDashboard from "../views/PageDashboard";
import PageAbout from "../views/PageAbout";
import Page404 from "../views/Page404";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/PageDashboard",
      name: "PageDashboard",
      component: PageDashboard,
    },
    // {
    //   path: "/",
    //   name: "PageDashboard",
    //   component: PageDashboard,
    // },
    // {
    //   path: "/PageDashboard",
    //   name: "PageDashboard",
    //   component: PageDashboard,
    // },
    {
      path: "/PageAbout",
      name: "PageAbout",
      component: PageAbout,
    },
    {
      path: "/404",
      name: "Page404",
      component: Page404,
    },
  ],
});
