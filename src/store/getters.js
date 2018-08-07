export default {
  language: state => state.app.language,
  authenticated: state => state.app.token != undefined && state.app.token.length > 0,
  token: state => state.app.token,
  app: state => state.app,
  user: state => state.user
}
