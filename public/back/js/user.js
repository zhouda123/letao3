$(function() {
  //一进入页面发送ajax请求 通过模板引擎完成渲染
  var currentPage = 1 //当前页
  var pageSize = 5 //每页五条
  var currentId //当前正在编辑的用户id
  var isDelete //当前修改状态
  render()
  function render() {
    $.ajax({
      type: 'get',
      url: '/user/queryUser',
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: 'json',
      success: function(info) {
        //template (模板ID ,数据对象) 可以任意使用数据属性
        var htmlStr = template('tpl', info)
        $('tbody').html(htmlStr)
        $('#paginator').bootstrapPaginator({
          //版本号
          bootstrapMajorVersion: 3,
          //当前页
          currentPage: info.page,
          //总页数
          totalPages: Math.ceil(info.total / info.size),
          size: 'small',
          //给页面添加点击事件
          onPageClicked: function(a, b, c, page) {
            //更新当前页
            currentPage = page
            //重新渲染
            render()
          }
        })
      }
    })
  }
  // 给所有的按钮 添加点击事件 (通过事件委托注册)
  $('tbody').on('click', '.btn', function() {
    //点击显示模态框
    // console.log('呵呵')

    $('#userModal').modal('show')
    //获取存储的id
    var currentId = $(this)
      .parent()
      .data('id')
    //1 启用 2禁用
    var isDelete = $(this).hasClass('btn-danger') ? 0 : 1

    $('#submitBtn').click(function() {
      $.ajax({
        type: 'POST',
        url: '/user/updateUser',
        data: {
          id: currentId,
          isDelete: isDelete
        },
        dataType: 'json',
        success: function(info) {
          if (info.success) {
            //修改成功
            //关闭模态框
            $('#userModal').modal('hide')
            //重新渲染页面
            render()
          }
        }
      })
    })
  })
  //点击模态框确认按钮 发送请求, 完成启用功能
})
