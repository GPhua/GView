import types from './types'
import Model from '@/components/OWF/models/actions/appmenu'

export default {
  /**
   * 获取列表
   */
  getAppMenus ({commit}, {varPath}) {
    return new Model(varPath).GET().then((res) => {
      commit(types.GET_APPMENUS, {
        data: res.data
      })
    })
  }
}
