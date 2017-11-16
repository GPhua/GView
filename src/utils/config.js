import $ from 'jquery'
class Config {
  constructor () {
    this.BASE_URL = ''
    this.API_URL = ''
    this.PAGE_SIZE = 10
    this.APP_URL = ''
    this.APP_ID = ''
    this.TITLE = ''
  }

  init (configUrl) {
    var that = this
    $.ajax({
      type: 'get',
      async: false,
      dataType: 'json',
      url: configUrl,
      success: function (response) {
        var env = {}
        if (response.CURR_ENV && response.CURR_ENV === 'PROD') {
          env = response.PROD
        } else {
          env = response.DEV
        }
        that.BASE_URL = env.OUI.BASE_URL
        that.API_URL = env.OUI.BASE_URL + env.OUI.ContextPath
        that.APP_URL = env.APP.BASE_URL + env.APP.ContextPath
        that.PAGE_SIZE = response.PAGE_SIZE
        that.APP_ID = env.APP.ID
        that.TITLE = response.TITLE
      }
    })
    return this
  }
}
export default new Config()
