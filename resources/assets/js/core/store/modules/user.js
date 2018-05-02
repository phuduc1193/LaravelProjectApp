import AuthService from '@/core/auth.service'

const user = {
  state: {
    token: AuthService.getToken(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },

  actions: {
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        AuthService.loginByUsername(userInfo.username.trim(), userInfo.password).then((token) => {
          commit('SET_TOKEN', token)
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },

    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        AuthService.logout().then(() => {
          commit('SET_TOKEN', '')
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },
  }
}

export default user