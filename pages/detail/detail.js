// pages/detail/detail.js
let api = require('../../utils/api.js')
let CacheCart = require('../../cacheCart.js').CacheCart
let cart = new CacheCart()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailId:null,
    loadModal: true,
    tabs: ['图文详情', '相关产品'],
    currentIndex:0,
    userInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    api.getDetailId({
      id:options.id
    }).then(res=>{
      this.setData({
        detailId:res.data
      })
    }),
      wx.getStorage({
      key: 'userInfo',
        success: res => {
          this.setData({
            userInfo: res.data
          })
        },
      })
  },
  // methods
  getUserInfo(event){
    let app = getApp()
    app.getuserInfo(event, this)
  },
  tabFunction(event) {
    console.log(event)
    this.setData({
      currentIndex: event.detail
    })
  },
  addcartfn(){
    let goods = this.data.detailId;
    //设置购买数
    goods.counts = 1;
    //设置选中状态
    goods.isSelect = true;
    cart.addGood(goods);
    wx.showToast({
      title: '添加成功'
    })
  },
  //用户点击右上角分享
  
  onShareAppMessage: function () {

  }
})