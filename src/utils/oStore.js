export default class OStore {
  constructor (lng, getters, actions, mutations) {
    lng = lng || this.getBrowserLanguage()
    this.vuexStore = null
    this.storeParams = {
      state: {
        language: lng
      },
      getters: getters,
      actions: actions,
      mutations: mutations,
      modules: {}
    }
  }
  init (Vuex) {
    if (!Vuex) return this
    this.vuexStore = new Vuex.Store(this.storeParams)
    return this
  }
  addOModules (modules) {
    if (modules) {
      Object.keys(modules).forEach((key) => {
        this.storeParams.modules[key] = modules[key]
      })
    }
    return this
  }
}
