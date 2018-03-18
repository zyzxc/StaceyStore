// pages/panic/panic.js
var app = getApp();
Page({
  data:{
    vou:[],
  },
   like:function(e){
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../index/detail?title='+e.currentTarget.dataset.title,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var vou=[
      { amount: 10, title: "天茂超市", full_money: "100", descr: "", point: '', start_time:"2018.3.1",end_time:"2018.3.31"},
      { amount: 50, title: "南极人直营店", full_money: "189", descr: "", point: '', start_time: "2017.11.20", end_time: "2018.05.20" }
      ];
    that.setData({
      vou: vou,
    });
    // wx.request({
    //   url: app.d.ceshiUrl + '/Api/User/voucher',
    //   method:'post',
    //   data: {uid:app.d.userId},
    //   header: {
    //     'Content-Type':  'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {  
    //     var vou = res.data.nouses;
    //     var status = res.data.status;
    //     if(status==1){
    //       that.setData({
    //         vou:vou,
    //       });
    //     }else{
    //       wx.showToast({
    //         title: res.data.err,
    //         duration: 2000
    //       });
    //     }
    //     //endInitData
    //   },
    //   error:function(e){
    //     wx.showToast({
    //       title: '网络异常！',
    //       duration: 2000
    //     });
    //   },
    // });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})