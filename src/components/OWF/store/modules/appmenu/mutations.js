import types from './types'

export default {
  [types.GET_APPMENUS] (state, payload) {
    state.appMenus = payload.data
  }
}
