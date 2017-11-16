import auth from '@/utils/auth'
import login from '../views/Login'

export default {
  path: 'login',
  component: login,
  beforeEnter (to, from, next) {
    if (auth.loggedIn()) {
      next('/')
    } else {
      next()
    }
  }
}
