// pages/find/find.js
let httpService = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newBean: [],
    totalPage: 1,
    currentPage: 1
  },
	/**
	*	查询数据
	*/
  loadData() {
    let hasMore = this.data.totalPage >= this.data.currentPage;
    if (hasMore) {
      httpService.getNewBean(this.data.currentPage).then((result) => {
        this.setData({
          newBean: this.data.newBean.concat(result.data.data)
        })
        this.data.currentPage++;
        this.data.totalPage = result.data.totalPage;
        // wx.stopPullDownRefresh();
      })
    } else {
      wx.showToast({
        title: '已经到底了！',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //分页
    this.loadData();
  },

  onPullDownRefresh: function () {
    this.data.newBean = [];
    this.data.totalPage=1;
    this.data.currentPage = 1;
    //刷新
    this.loadData();
  },
})