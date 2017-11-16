import OStore from '../utils/oStore'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from '../components/OWF/store'

const oStore = new OStore('zh-CN', getters, actions, mutations).addOModules(modules)
export default oStore
