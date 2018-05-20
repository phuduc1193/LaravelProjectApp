import "./bootstrap";

import Vue from "vue";
import App from "./App.vue";
import router from "./core/router";

import Element from "element-ui";
import i18n from "./core/language";
import store from "./core/store";
import validator from "./utils/validator";

import moment from "moment";
import VueMoment from "vue-moment";
Vue.use(VueMoment, { moment });

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
