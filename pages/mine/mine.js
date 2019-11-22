Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    openid:null,
    loadModal:true
  },
  getUserInfo(event){
    let app = getApp();
    app.getUserInfo(event, this)
  },
  onShow: function () {
    wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        this.setData({
          userInfo:res.data
        })
      }
    })
    wx.getStorage({
      key: 'openid',
      success: (res)=> {
        this.setData({
          openid: res.data
        })
      }
    })
    wx.getStorage({
      key: 'settings',
      success: (res) =>{
        this.setData({
          settings: res.data
        })
      }
    })
  }
})