import env from "./environment";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";

class AuthService {
  static isAuthenticated() {
    let token = this.getToken();
    if (typeof token == "string" && jwtDecode(token).exp > Date.now() / 1000)
      return true;
    Cookies.remove(env.TokenKey);
    return false;
  }

  static getToken() {
    return Cookies.get(env.TokenKey);
  }

  static loginByUsername(username, password) {
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/login", {
          username: username,
          password: password
        })
        .then(response => {
          const data = response.data;
          AuthService.setAuthCookies(data);
          resolve(data.access_token);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static register(name, username, email, password, confirmation) {
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/register", {
          name: name,
          username: username,
          email: email,
          password: password,
          password_confirmation: confirmation
        })
        .then(response => {
          const data = response.data;
          AuthService.setAuthCookies(data);
          resolve(data.access_token);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static setAuthCookies(data) {
    const twoHours = 1 / 12;
    Cookies.set(env.TokenKey, data.access_token, {
      expires: twoHours
    });
    Cookies.set("user", JSON.stringify(data.user), {
      expires: twoHours
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/logout")
        .then(response => {
          Cookies.remove(env.TokenKey);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getUserInfo() {
    return new Promise((resolve, reject) => {
      axios
        .get("/auth/me")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default AuthService;
