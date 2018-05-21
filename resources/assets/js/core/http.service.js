import axios from "axios";
import Cookies from "js-cookie";
import NProgress from "nprogress";
import env from "./environment";

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

axios.interceptors.request.use(
  config => {
    const token = Cookies.get(env.TokenKey);

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!NProgress.isStarted()) NProgress.start();

    return config;
  },
  error => {
    if (NProgress.isStarted()) NProgress.done();

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if (NProgress.isStarted()) NProgress.done();

    return response;
  },
  error => {
    if (NProgress.isStarted()) NProgress.done();

    return Promise.reject(error);
  }
);
