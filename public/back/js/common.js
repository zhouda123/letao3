/*需求:在第一个啊ajax发送到时候,开启进度条
在全部啊ajax回来的时候关闭进度条 */
// 开启进度条
// NProgress.start()
// setTimeout(function() {
//   NProgress.done()
// }, 2000)
// ajax 全局事件
//  .ajaxComplete（）   当ajax完成时,调用  不管成不成功
// .ajaxError（） 失败调用
// .ajaxSuccess（） 成功调用
/*
    .ajaxSend() 当ajax发送前调用
    .ajaxStart() 当第一个ajax发送时调用
    .ajaxStop() 当全部的ajax请求完成时调用

 */
$(document).ajaxStart(function() {
  //第一个ajax发送时 开启进度条
  NProgress.start()
})
$(document).ajaxStop(function() {
  //第一个ajax发送时 开启进度条
  NProgress.done()
})
//等待页面dom结构的加载后执行
$(function() {
  //注册事件完成功能功能
  //功能1:左侧导航切换效果
  $('.lt_aside .category').click(function() {
    $('.lt_aside .child')
      .stop()
      .slideToggle()
  })
  //功能2:左侧菜单切换效果
  $('.icon_left').click(function() {
    $('.lt_aside').toggleClass('hidemenu')
    $('.lt_main').toggleClass('hidemenu')
    $('.lt_topbar').toggleClass('hidemenu')
  })

  //功能3:退出功能
  //给右侧按钮,添加点击事件,让模态框显示
  $('.icon_right').click(function() {
    $('#myModal').modal('show')
  })

  //给退出按钮添加点击事件, 销毁当前用户的登录状态
  $('#logoutBtn').click(function() {
    //发送 ajax请求 让后端销毁当前用户的登录状态
    $.ajax({
      type: 'get',
      url: '/employee/employeeLogout',
      dataType: 'json',
      success: function(info) {
        console.log(info)
        if (info.success) {
          location.href = 'login.html'
        }
      }
    })
  })

  //一进入页面  发送ajax请求 获取当前用户的登录状态
  //如果当前用户登录了,让用户继续访问
  //如果没有登录 将用户拦截到登录页
})
