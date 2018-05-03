const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  previousRoute: state => state.route.history.slice(-2)[0]
}
export default getters