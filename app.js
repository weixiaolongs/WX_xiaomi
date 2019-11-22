//app.js
let api = require('./utils/api.js');

App({
  onLaunch: function () {

  },
  getuserInfo(event,$this) {
    if (event.detail.userInfo) {
      $this.setData({
        userInfo: event.detail.userInfo
      })
      //执行微信登录
      wx.login({
        success: res => {
          api.login({
            code: res.code
          }).then(res => {
            $this.setData({
              openid: res.data.data.openid,
              settings: res.data.data.settings
            })
            wx.setStorage({
              key: 'openid',
              data: res.data.data.openid,
            })
            wx.setStorage({
              key: 'userInfo',
              data: event.detail.userInfo,
            })
            wx.setStorage({
              key: 'settings',
              data: res.data.data.settings
            })
          })
        }
      })
    }
  }
})