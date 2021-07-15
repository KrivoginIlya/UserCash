import Vue from "vue";
import VueRouter from "vue-router";
import PageDashboard from "../views/PageDashboard";
import PageAbout from "../views/PageAbout";
import Page404 from "../views/Page404";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/PageDashboard",
      name: "PageDashboard",
      component: PageDashboard,
    },
    {
      path: "/PageDashboard/:page",
      name: "PageDashboard",
      component: PageDashboard,
    },
    {
      path: "/Auth",
      name: "Login",
      component: Page404,
    },
    {
      path: "/PageAbout",
      name: "PageAbout",
      component: PageAbout,
    },
    {
      path: "/*",
      name: "Page404",
      component: Page404,
    },
  ],
});
// const isAuth = false;

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !isAuth) {
//     next({
//       name: "Login",
//     });
//   } else {
//     next();
//   }
// });
const getTitleName = (routeName) => {
  return {
    PageDashboard: "Home page",
    PageAbout: "About page",
    Page404: "Not found page",
  }[routeName];
};
router.afterEach((to) => {
  document.title = getTitleName(to.name);
});
export default router;
