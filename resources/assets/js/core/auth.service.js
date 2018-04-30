import Env from './environment'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

class AuthService {
  static isAuthenticated() {
    let token = Cookies.get(Env.TokenKey)
    if (typeof token == 'string' && jwtDecode(token).exp > Date.now() / 1000)
      return true
    Cookies.remove(Env.TokenKey)
    return false
  }
}

export default AuthService