var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_id: app.cur_id,
    basic: "",
    now: "",
    suggestion: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    that.getnow(function(d) {
      wx.hideToast();
      d.now.cond.src = "http://files.heweather.com/cond_icon/" + d.now.cond.code + ".png";
      that.setData({
        basic: d.basic,
        now: d.now
      })
    })
    that.getsuggestion(function(d) {
      that.setData({
        suggestion: d.suggestion
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getnow: function(fn) {
    wx.request({
      url: 'https://www.xiaoguge.cn/api/wxtest/now.php',
      data: {
        city: app.curid,
        key: '01a7798b060b468abdad006ea3de4713'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        fn(res.data.HeWeather5[0]);
      }
    })
  },
  getsuggestion: function(fn) {
    wx.request({
      url: 'https://www.xiaoguge.cn/api/wxtest/suggestion.php',
      data: {
        city: app.curid,
        key: '01a7798b060b468abdad006ea3de4713'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        fn(res.data.HeWeather5[0]);
      }
    })
  },
  bindViewTap: function() {
    wx.switchTab({
      url: '../city/city',
    })
  }
})