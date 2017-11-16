import storage from './helpers/storage'

const TOKEN_KEY = 'jwtToken'
const AUTHORIZATION = 'Authorization'

export default {
  name: 'auth',

  /**
   * 获取 auth，返回：管理员信息和 token
   * @return {Object}
   */
  get () {
    return {
      [TOKEN_KEY]: storage.get(TOKEN_KEY)
    }
  },

  /**
   * 登录
   * @param {string} manager 登录管理员
   * @param {string} token 登录 token
   */
  login ({token}) {
    storage.set(TOKEN_KEY, token)
  },

  createAuthorizationTokenHeader () {
    return {[AUTHORIZATION]: storage.get(TOKEN_KEY)}
  },

  /**
   * 登出
   */
  logout () {
    storage.remove(TOKEN_KEY)
  },

  /**
   * 是否已登录
   * @return {boolean}
   */
  loggedIn () {
    return !!storage.get(TOKEN_KEY)
  }
}
