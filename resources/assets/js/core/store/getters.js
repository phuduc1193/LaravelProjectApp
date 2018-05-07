const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  token: state => state.user.token,
  username: state => state.user.username,
  permissionRoutes: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  scopes: state => state.user.scopes,
  // previousRoute: state => state.route.history.slice(-2)[0],
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
}
export default getters