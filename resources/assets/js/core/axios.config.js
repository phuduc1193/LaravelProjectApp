import axios from "axios";
import Cookies from "js-cookie";
import NProgress from "nprogress";
import env from "@/core/environment";
import store from "@/core/store";
import AuthService from "@/core/service/auth";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

let baseURL = document.head.querySelector('meta[name="api-url"]');
axios.defaults.baseURL = baseURL.content;

let csrfToken = document.head.querySelector('meta[name="csrf-token"]');
if (csrfToken) {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken.content;
} else {
  console.error(
    "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
  );
}

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100
});

const doneNProgress = function() {
  setTimeout(() => {
    NProgress.done();
  }, 500);
};

axios.interceptors.request.use(
  config => {
    const token = Cookies.get(env.TokenKey);

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // if (!NProgress.isStarted()) NProgress.start();

    return config;
  },
  error => {
    if (NProgress.isStarted()) doneNProgress();

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if (NProgress.isStarted()) doneNProgress();

    return response;
  },
  error => {
    if (NProgress.isStarted()) doneNProgress();

    if (error.response.status === 401 && AuthService.isAuthenticated()) {
      store.dispatch("LogOut").then(() => {
        Message.error("Verification failed, please login again");
        this.$router.push({ path: "/login" });
      });
    }

    return Promise.reject(error);
  }
);
