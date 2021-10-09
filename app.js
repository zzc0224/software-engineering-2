# software-engineering-2
基于第一次结对编程作业设计的原型，开发出一款博饼软件
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    name1:"",
    name2:"",
    name3:"",
    name4:"",
    name5:"",
    name6:"",
    name7:"",
    name8:"",
    p1:"",
    p2:"",
    p3:"",
    p4:"",
    p5:"",
    p6:"",
  }
})
