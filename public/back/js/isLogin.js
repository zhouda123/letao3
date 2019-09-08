$.ajax({
  type: 'get',
  url: '/employee/checkRootLogin',
  dataType: 'json',
  success: function(info) {
    if (info.error === 400) {
      //拦截到登录页
      location.href = 'login.html'
    }
    if (info.success) {
      //登录成功
      console.log('成功')
    }
  }
})
