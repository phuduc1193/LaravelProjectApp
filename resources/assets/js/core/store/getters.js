const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  token: state => state.user.token,
  previousRoute: state => state.route.history.slice(-2)[0],
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
}
export default getters