$(function() {
  // 基于准备好的dom，初始化echarts实例
  var echarts_left = echarts.init(document.querySelector('.echarts_left'))

  // 指定图表的配置项和数据
  var option1 = {
    //大标题
    title: {
      //标题文本
      text: '十大帅哥投票'
    },
    //提示框组件
    tooltip: {},
    legend: {
      data: ['销量', '人数']
    },
    //X轴的数据
    xAxis: {
      data: ['朱辰明', '哪吒', '周达', '周可以', '福克斯', '三系']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar', //柱状图 //折线图 line
        data: [5, 20, 36, 10, 10, 20]
      },
      {
        name: '人数',
        type: 'bar',
        data: [888, 280, 368, 810, 108, 208]
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  echarts_left.setOption(option1)

  // 基于准备好的dom，初始化echarts实例
  //绘制饼图
  var echarts_right = echarts.init(document.querySelector('.echarts_right'))

  // 指定图表的配置项和数据
  var option2 = {
    //标题组件
    title: {
      //主标题文本
      text: '某站点用户访问来源',
      //副标题文本
      subtext: '纯属虚构',
      //控制水平方向位置
      x: 'center',
      //标题文本样式
      textStyle: {
        color: 'red',
        fontSize: 20
      }
    },
    //提示框组件
    tooltip: {
      trigger: 'item',
      //配置提示框的内容
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  echarts_right.setOption(option2)
})
