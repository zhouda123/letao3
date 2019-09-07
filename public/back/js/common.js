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
