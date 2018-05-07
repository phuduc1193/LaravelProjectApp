import {
  asyncRouterMap,
  constantRouterMap
} from '@/core/router'

function hasPermission(scopes, route) {
  if (route.meta && route.meta.scopes) {
    return scopes.some(role => route.meta.scopes.indexOf(role) >= 0)
  } else {
    return true
  }
}

function filterAsyncRouter(asyncRouterMap, scopes) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(scopes, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, scopes)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, observable) {
      return new Promise(resolve => {
        let accessedRouters
        if (observable.scopes.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, observable.scopes)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission