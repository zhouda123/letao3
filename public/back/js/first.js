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

  //给添加按钮 添加点击事件 显示模态框

  $('#addBtn').click(function() {
    $('#addModal').modal('show')
  })

  //调用表单校验插件
  $('#form').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok', //校验成功
      invalid: 'glyphicon glyphicon-remove', //校验失败
      validating: 'glyphicon glyphicon-refresh' //校验中
    },
    //校验字段  先给input设置name
    fields: {
      categoryName: {
        //校验规则
        validators: {
          //非空

          notEmpty: {
            //提示信息
            message: '请输入一级分类名称'
          }
        }
      }
    }
  })

  //阻止默认提交 通过ajax提交
  $('#form').on('success.form.bv', function(e) {
    //阻止默认请求
    e.preventDefault()

    //发送jax
    $.ajax({
      type: 'post',
      url: '/category/addTopCategory',
      data: $('#form').serialize(),
      dataType: 'json',
      success: function(info) {
        if (info.success) {
          //关闭模态
          $('#addModal').modal('hide')
          //重新渲染
          render()

          //重置表单内容
          //.resetForm(true)内容和状态都重置
          // .resetForm() 只重置内容
          $('#form')
            .data('bootstrapValidator')
            .resetForm(true)
        }
      }
    })
  })
})
