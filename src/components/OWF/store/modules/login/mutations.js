import types from './types'

export default {
  [types.GET_LOGIN] (state, payload) {
    state.login = payload.data
  }
}
