import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import AuthService from "@/core/service/auth";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100
});

const whiteList = ["/login", "/register"];

function hasPermission(scopes, permissionScopes) {
  if (scopes.indexOf("admin") >= 0) return true;
  if (!permissionScopes) return true;
  return scopes.some(scope => permissionScopes.indexOf(scope) >= 0);
}

router.beforeEach((to, from, next) => {
  if (!NProgress.isStarted()) NProgress.start();
  if (AuthService.isAuthenticated()) {
    if (whiteList.indexOf(to.path) !== -1) {
      next("/");
      if (NProgress.isStarted()) NProgress.done();
    } else {
      if (store.getters.scopes.length === 0) {
        store
          .dispatch("GetUserInfo")
          .then(data => {
            const scopes = data.scopes;
            store
              .dispatch("GenerateRoutes", {
                scopes
              })
              .then(() => {
                router.addRoutes(store.getters.addRouters);
                next({
                  ...to,
                  replace: true
                });
              });
          })
          .catch(() => {
            store.dispatch("LogOut").then(() => {
              Message.error("Verification failed, please login again");
              next({
                path: "/login"
              });
            });
          });
      } else {
        if (hasPermission(store.getters.scopes, to.meta.scopes)) {
          next();
        } else {
          next({
            path: "/401",
            replace: true,
            query: {
              noGoBack: true
            }
          });
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
      if (NProgress.isStarted()) NProgress.done();
    }
  }
});

router.afterEach(() => {
  if (NProgress.isStarted()) NProgress.done();
});
