import "./bootstrap";

import Vue from "vue";
import App from "./App.vue";
import router from "./core/router";

import "normalize.css/normalize.css";
import Element from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";

import "./core/auth.guard";
import i18n from "./core/language";
import store from "./core/store";
import "./core/http.service";
import validator from "./utils/validator";

import VueMoment from "vue-moment";
Vue.use(VueMoment);

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});

const app = new Vue({
  el: "#app",
  i18n,
  store,
  router,
  validator,
  template: "<App/>",
  components: {
    App
  }
});
