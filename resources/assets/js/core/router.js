import Vue from "vue";
import VueRouter from "vue-router";

import DashboardComponent from "@/components/Dashboard";

Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/login",
    component: view("Login"),
    hidden: true
  },
  {
    path: "/register",
    component: view("Register"),
    hidden: true
  },
  {
    path: "/404",
    component: view("NotFound"),
    hidden: true
  },
  {
    path: "/401",
    component: view("Unauthorized"),
    hidden: true
  },
  {
    path: "",
    component: view("Layout.Layout"),
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        name: "dashboard",
        meta: {
          title: "dashboard",
          icon: "fa fa-tachometer",
          noCache: true
        }
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

export const asyncRouterMap = [
  {
    path: "/projects",
    component: view("Layout.Layout"),
    redirect: "noredirect",
    name: "projects",
    meta: {
      title: "projects",
      icon: "fa fa-briefcase",
      scopes: ["admin"]
    },
    children: [
      {
        path: "list",
        component: view("Project.List"),
        name: "list",
        meta: {
          title: "list",
          icon: "fa fa-list-ul",
          scopes: ["admin"]
        }
      },
      {
        path: "create",
        component: view("Project.Create"),
        name: "create",
        meta: {
          title: "create",
          icon: "fa fa-pencil",
          scopes: ["admin"]
        }
      }
    ]
  }
];

export default new VueRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

function view(name) {
  if (typeof name === "string" && name.includes(".")) {
    name = name.replace(".", "/");
  }

  return function(resolve) {
    require(["@/views/" + name + ".vue"], resolve);
  };
}
