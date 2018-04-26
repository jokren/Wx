// pages/home/home.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    name:"adasds"
  },
  getInput(e){
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  }
})
