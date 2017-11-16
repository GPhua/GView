import auth from './auth'
export default class ORouter {
  constructor (Root, login, logout, notFound) {
    this.vueRouter = null
    this.Root = Root
    this.login = login
    this.logout = logout
    this.notFound = notFound
    this.routerChildrens = []
  }
  init (VueRouter, iView) {
    var rs = {
      path: '/',
      component: this.Root,
      children: [
        {
          path: '/',
          component: this.Root,
          children: this.routerChildrens,
          meta: {
            requiresAuth: true
          }
        },
        this.login,
        this.logout,
        this.notFound
      ]
    }

    if (!VueRouter || !iView) return this
    this.vueRouter = new VueRouter({routes: [rs]})
    this.vueRouter.beforeEach((to, from, next) => {
      iView.LoadingBar.start()
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.loggedIn()) {
          next({
            path: 'login',
            query: {redirect: to.fullPath}
          })
        } else {
          next()
        }
      } else {
        next()
      }
    })
    this.vueRouter.afterEach((to, from, next) => {
      iView.LoadingBar.finish()
    })
    return this
  }
  setORoot (root) {
    this.root = root
    return this
  }
  setOLayout (layout) {
    this.layout = layout
    return this
  }
  setOLogin (login) {
    this.login = login
    return this
  }
  setOLogout (logout) {
    this.logout = logout
    return this
  }
  setONotFound (notFound) {
    this.notFound = notFound
    return this
  }
  addORoutes (routes) {
    if (routes) {
      this.routerChildrens = this.routerChildrens.filter(item => {
        return Object.keys(routes).forEach((key) => {
          return item[key] !== undefined
        })
      })
      Object.keys(routes).forEach((key) => {
        this.routerChildrens.push(routes[key])
      })
    }
    return this
  }
}
