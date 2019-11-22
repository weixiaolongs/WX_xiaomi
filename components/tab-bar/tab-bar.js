// components/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['tabs-active-text-class'],
  properties: {
    tabTitles: {
      type: Array,
      value: [],
    },
    tabs: {
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapIndex(event){
      // console.log(event)
      this.setData({
        currentIndex: event.target.dataset.index
      })
    this.triggerEvent('tabtab',this.data.currentIndex)
    }
  }
})
