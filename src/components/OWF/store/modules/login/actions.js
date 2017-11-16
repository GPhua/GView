import types from './types'
import Model from '../../../../../components/OWF/models/actions/login'

export default {
  /**
   * 登录系统
   */
  login ({commit}, {params}) {
    return new Model().POST({data: {params}.params}).then((res) => {
      commit(types.GET_LOGIN, {
        data: res.data
      })
    })
  }
}
