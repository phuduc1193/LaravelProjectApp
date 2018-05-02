import Env from './environment'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

class AuthService {
  static isAuthenticated() {
    let token = this.getToken()
    if (typeof token == 'string' && jwtDecode(token).exp > Date.now() / 1000)
      return true
    Cookies.remove(Env.TokenKey)
    return false
  }

  static getToken() {
    return Cookies.get(Env.TokenKey)
  }

  static loginByUsername(username, password) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', {
        username: username,
        password: password
      }).then(function(response) {
        const data = response.data
        const twoHours = 1/12
        Cookies.set(Env.TokenKey, data.access_token, { expires: twoHours })
        resolve(data.access_token)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  static logout() {
    return new Promise((resolve, reject) => {
      Cookies.remove(Env.TokenKey)
      resolve()
    })
  }
}

export default AuthService