/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/",
          name: "home",
          component: () => import("./views/Home.vue"),
        },
        {
          path: "/account-type",
          name: "AccountType",
          component: () => import("./views/pages/AccountType.vue"),
        },
        //organization flow
        {
          path: "",
          name: "OrganizationType",
          component: () =>
            import("./views/pages/Organizationflow/OrganizationName.vue"),
          children: [
            {
              path: "/organization/name",
              name: "ClaimName",
              component: () =>
                import("./components/organization/ClaimName.vue"),
            },
            {
              path: "/organization/information",
              name: "OrganizationInfo",
              component: () =>
                import("./components/organization/OrganizationInfo.vue"),
            }
          ],
        },
        //setup successful
        {
          path: "/setup",
          name: "SetUpCompleted",
          component: () =>
            import("./views/pages/SetUpCompleted.vue"),
        },
      ],
    },
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================

        {
          path: "/page2",
          name: "page-2",
          component: () => import("./views/Page2.vue"),
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/pages/login",
          name: "page-login",
          component: () => import("@/views/pages/Login.vue"),
        },
        {
          path: "/pages/error-404",
          name: "page-error-404",
          component: () => import("@/views/pages/Error404.vue"),
        },
      ],
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404",
    },
  ],
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
