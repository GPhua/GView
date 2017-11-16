import './theme/global/index.scss'
import './theme/iview/index.less'
import './utils/init'

import OWF from './components/OWF'
import OIcon from './components/OIcon'
import OList, {
  ListHeader as OListHeader,
  ListOperations as OListOperations,
  ListSearch as OListSearch
} from './components/OList'
import OI18nMethods from './utils/mixins/oI18n'
import OStore from './store'
import ORouter from './router'
import UrlParams from './utils/helpers/urlParams'
import OConfig from './utils/config'
import base from './utils/helpers/base'
import time from './utils/helpers/time'
import storage from './utils/helpers/storage'
import i18n from './i18n'
import restHelper from './utils/helpers/restHelpers'
import ORest from './utils/rest'

const ouiComponents = {
  OWF, OList, OListHeader, OListOperations, OListSearch, OIcon
}
const oui = {
  store: OStore,
  router: ORouter,
  helpers: {common: base, time, storage, restHelper},
  config: OConfig,
  urlParams: UrlParams,
  rest: ORest,
  i18n: i18n,
  version: 'oui version: v0.0.2'
}
const minxins = {OI18nMethods}
const fns = {oui}
const install = function (Vue, opts = {}) {
  Object.keys(ouiComponents).forEach((key) => {
    Vue.component(key, ouiComponents[key])
  })
  Object.keys(minxins).forEach((key) => {
    Object.keys(minxins[key].methods).forEach((mkey) => {
      Vue.prototype['$' + mkey] = minxins[key].methods[mkey]
    })
  })
  Object.keys(fns).forEach((key) => {
    Vue[key] = fns[key]
  })

  Vue.prototype.$oui = oui
}

export default Object.assign(ouiComponents, {install})
