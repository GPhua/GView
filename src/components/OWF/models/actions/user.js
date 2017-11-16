import REST from '@/utils/rest'
import config from '@/utils/config'
import restHelpers from '@/utils/helpers/restHelpers'

export default class extends REST {
  constructor () {
    super()
    this.baseURL = config.API_URL
    this.errorHandler = restHelpers.errorHandler
    this.headers = restHelpers.getHeaders()
    this.path = 'user'
  }
}
