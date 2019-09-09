$(function() {
  var currentPage = 1
  var pageSize = 5
  //一进入页面 发送 ajax请求 完成渲染

  render()
  function render() {
    $.ajax({
      type: 'get',
      url: '/category/queryTopCategoryPaging',
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dateType: 'json',
      success: function(info) {
        console.log(info)
        var htmlStr = template('firstTpl', info)
        $('tbody').html(htmlStr)

        //根据返回数据 完成初始化

        $('#paginator').bootstrapPaginator({
          // 版本号
          bootstrapMajorVersion: 3,
          // 当前页
          currentPage: info.page,
          // 总页数
          totalPages: Math.ceil(info.total / info.size),

          // 给页码添加点击事件
          onPageClicked: function(a, b, c, page) {
            // 将选中的页码更新到 currentPage
            currentPage = page
            // 重新渲染
            render()
          }
        })
      }
    })
  }
})
