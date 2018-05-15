import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/views/Login";
import RegisterPage from "@/views/Register";
import NotFoundPage from "@/views/NotFound";
import UnauthorizedPage from "@/views/Unauthorized";
import Layout from "@/views/Layout/Layout";
import ProjectListPage from "@/views/Project/list";
import ProjectCreatePage from "@/views/Project/create";

import DashboardComponent from "@/components/Dashboard";

Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/login",
    component: LoginPage,
    hidden: true
  },
  {
    path: "/register",
    component: RegisterPage,
    hidden: true
  },
  {
    path: "/404",
    component: NotFoundPage,
    hidden: true
  },
  {
    path: "/401",
    component: UnauthorizedPage,
    hidden: true
  },
  {
    path: "",
    component: Layout,
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
    component: Layout,
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
        component: ProjectListPage,
        name: "list",
        meta: {
          title: "list",
          icon: "fa fa-list-ul",
          scopes: ["admin"]
        }
      },
      {
        path: "create",
        component: ProjectCreatePage,
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
