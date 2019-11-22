let api = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeBean: null,
    cardCur:0,
    goodslist:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1.获取首页数据
    api.getHomeBean().then(res => {
      // console.log(res.data.data)
      this.setData({
        homeBean: res.data.data,
      })
    }).catch((error) => {
      console.log(error)
    })
    // 获取商品
    api.gooslist().then(res => {
      console.log(res.data)
      this.setData({
        goodslist: res.data,
      })
    }).catch((error) => {
      console.log(error)
    })
  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },



})