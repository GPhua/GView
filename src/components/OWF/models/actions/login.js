import REST from '@/utils/rest'
import config from '@/utils/config'
import iView from 'iview'
import i18n from '@/i18n'
// 获取翻译函数
const t = i18n.getT(null)
export default class extends REST {
  constructor () {
    super()
    this.baseURL = config.API_URL
    this.errorHandler = (res) => {
      if (res.response.status === 401) {
        iView.Message.error(t('login.loginError'))
      }
    }
    this.headers = {
      'Accept': 'application/json',
      'ContentType': 'application/json'
    }
    this.path = 'auth'
  }
}
