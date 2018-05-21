const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  token: state => state.user.token,
  username: state => state.user.username,
  permissionRoutes: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  scopes: state => state.user.scopes,
  project: state => state.project.current,
  projectStatus: state => state.status.projectStatus,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
};
export default getters;
