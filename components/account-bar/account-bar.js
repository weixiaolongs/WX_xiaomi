// components/account-bar/account-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    summary:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    squarecheckfill:{ name: 'squarecheckfill', isShow: true },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSelectAll(event){
      let checked = event.detail.value[0];
      let data = {checked:checked}
      this.triggerEvent('checkboxchange',data)
    }
  }
})
