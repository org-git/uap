export default {
  authenticated: state => state.token.length > 0,
  token: state => state.token,
  app: state => state.app,
  user: state => state.user
}
