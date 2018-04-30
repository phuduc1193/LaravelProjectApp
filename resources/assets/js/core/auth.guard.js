import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import AuthService from './auth.service'

NProgress.configure({ showSpinner: false })

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0)
    return true
  if (!permissionRoles)
    return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (AuthService.isAuthenticated()) {
    if (whiteList.indexOf(to.path) !== -1) {
      next({ path: '/' })
      NProgress.done()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})