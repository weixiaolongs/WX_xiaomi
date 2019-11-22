// pages/cart/cart.js
let CacheCart = require('../../cacheCart.js').CacheCart
let cart = new CacheCart()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    isSelect: false
  },
  initData() {
    let list = cart.getGoods();
    let summary = cart.getAccount();

    this.setData({
      cartList: list,
      summary: summary
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  checkAllSelect(){
    //判断是否已经全部选中
    let select = cart.isAllSelect();
    //获取组件对象
    let accountBar = this.selectComponent('#accountbar')
    //修改组件里面的多选框状态
    accountBar.setData({
      isSelect: select
    })
  },
  onShow: function() {
    this.initData()
   this.checkAllSelect()
  },
  accountBarClick(event) {
    cart.selectAllGoods(event.detail.checked == "checked")
    this.initData()
  },
  
  bindchange(event){
    console.log(event.detail.value)
    //修改商品多选框状态
    cart.selectOnlySelect(event.detail.value)
    //判断是否已经全部选中
    this.checkAllSelect()
    //重新渲染数据
    this.initData()
  }

})