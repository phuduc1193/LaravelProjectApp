import AuthService from '@/core/auth.service'

const user = {
  state: {
    token: AuthService.getToken(),
    username: AuthService.getUsername(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    }
  },

  actions: {
    LoginByUsername({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        AuthService.loginByUsername(userInfo.username.trim(), userInfo.password).then(response => {
          commit('SET_TOKEN', response.token)
          commit('SET_USERNAME', response.username)
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },

    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        AuthService.logout().then(() => {
          commit('SET_TOKEN', '')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    RegisterUser({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        AuthService.register(userInfo.name, userInfo.username.trim(), userInfo.email, userInfo.password, userInfo.passwordConfirmation).then(response => {
          commit('SET_TOKEN', response.token)
          commit('SET_USERNAME', response.username)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user