import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
import enLocale from "./en";
import vnLocale from "./vn";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  vn: {
    ...vnLocale
  }
};

const i18n = new VueI18n({
  locale: Cookies.get("language") || "en",
  messages
});

export default i18n;
