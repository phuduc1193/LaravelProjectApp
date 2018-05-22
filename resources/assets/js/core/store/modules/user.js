import AuthService from "@/core/service/auth";

const user = {
  state: {
    token: AuthService.getToken(),
    scopes: [],
    username: "",
    name: "",
    email: ""
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_SCOPES: (state, scopes) => {
      state.scopes = scopes;
    }
  },

  actions: {
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        AuthService.loginByUsername(userInfo.username.trim(), userInfo.password)
          .then(token => {
            commit("SET_TOKEN", token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        AuthService.logout()
          .then(() => {
            commit("SET_TOKEN", "");
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    RegisterUser({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        AuthService.register(
          userInfo.name,
          userInfo.username.trim(),
          userInfo.email,
          userInfo.password,
          userInfo.passwordConfirmation
        )
          .then(token => {
            commit("SET_TOKEN", token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        AuthService.getUserInfo()
          .then(data => {
            commit("SET_SCOPES", data.scopes);
            commit("SET_USERNAME", data.username);
            commit("SET_NAME", data.name);
            commit("SET_EMAIL", data.email);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    UpdateUserByUsername({ commit }, userInfo) {}
  }
};

export default user;
