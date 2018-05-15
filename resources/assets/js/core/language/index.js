import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
import enLocale from "./en";
import vnLocale from "./vn";

import enELeLocale from "element-ui/lib/locale/lang/en";
import vnELeLocale from "element-ui/lib/locale/lang/vi";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...enELeLocale
  },
  vn: {
    ...vnLocale,
    ...vnELeLocale
  }
};

const i18n = new VueI18n({
  locale: Cookies.get("language") || "en",
  messages
});

export default i18n;
