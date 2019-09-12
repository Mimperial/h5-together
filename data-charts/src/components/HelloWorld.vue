<template>
  <div class="hello">
    <div id="data-chart" style="width:365px;height:650px;background:#4B515D;padding-top:10px"></div>
    <!-- <div id="data-chart" style="width:365px;height:400px;background:#4B515D;padding-top:10px"></div> -->
    <div style="margin-top:0px;color:#fff"><h3 >国内生产总值折线图</h3>  </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data (){
    return {

    }
  },
  mounted(){ this.getChart()},
  methods:{
    getChart(){
      var newGnsczzArr = []
      var newGmzsrArr = []
      var newFirArr = []
      var newSecArr = []
      var newThrArr = []
      var newEveArr = []
      var dataChart = this.$echarts.init(document.getElementById('data-chart'));
      let gnsczzArr =[896915.6, 820099.5, 737074, 683390.5, 642097.6, 588141.2, 537329,483392.8,410354.1,347934.9,321229.5,270704,219028.5,185998.9,161415.4].reverse()
      let gmzsrArr =[900309.5, 820754.3, 740060.8,685992.9, 641280.6, 592963.2, 538580,487940.2,412119.3,348517.7,319244.6,270092.3,219438.5,187318.9,161840.2].reverse()
      let firArr =[64734, 62099.5, 60139.2, 57774.6, 55626.3, 53028.1, 49084.5,44781.4,38430.8,33583.8,32464.1,27674.1,23317,21806.7,20904.3].reverse()
      let secArr =[366000.9, 332742.7, 296547.7, 282040.3, 277571.8, 261956.1, 244643.3,227038.8,191629.8,160171.7,149956.6,126633.6,104361.8,88084.4,74286.9].reverse()
      let thrArr =[469574.6, 425912.1, 383373.9, 346178, 308082.5, 277979.1, 244852.2,216120,182058.6,154762.2,136823.9,115784.6,91759.7,77427.8,66648.9,].reverse()
      let eveArr =[64644, 59201, 53680, 50028, 47005, 43684, 39874,36302,30808,26180,24100,20494,16738,14368,12487]
      gnsczzArr.forEach(element => {
        
        newGnsczzArr.push(element/10000)
      });
      gmzsrArr.forEach(element => {
        newGmzsrArr.push(element/10000)
      });
      firArr.forEach(element => {
        newFirArr.push(element/10000)
      });
      secArr.forEach(element => {
        newSecArr.push(element/10000)
      });
      thrArr.forEach(element => {
        newThrArr.push(element/10000)
      });
      eveArr.forEach(element => {
        newEveArr.push(element/10000)
      });
    let option = option = {
    title: {
        text: '',
        textStyle: {
                    color: '#fff',
                    padding:'3em'
                }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[
          {
               name:'国民总收入(亿元)',
               icon : 'circle',
               textStyle: {
                    color: '#fff'          // 图例文字颜色
               }
           },
          {
               name:'国内生产总值(亿元)',
               icon : 'circle',
               textStyle: {
                    color: '#fff'          // 图例文字颜色
               }
           },
          {
               name:'第一产业增加值(亿元)',
               icon : 'circle',
               textStyle: {
                    color: '#fff'          // 图例文字颜色
               }
           },
          {
               name:'第二产业增加值(亿元)',
               icon : 'circle',
               textStyle: {
                    color: '#fff'          // 图例文字颜色
               }
           },
          {
               name:'第三产业增加值(亿元)',
               icon : 'circle',
               textStyle: {
                    color: '#fff'          // 图例文字颜色
               }
           },{
               name:'人均国内生产总值(元)',
               icon : 'circle',
               textStyle: {
                    color: 'white'          // 图例文字颜色
               },}],
        
    },
    
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2018', '2017', '2016', '2015', '2014', '2013', '2012','2011','2010','2009','2008','2007','2006','2005','2004'].reverse(),
        axisLine:{
                        lineStyle:{
                            color:'#fff',
                            // width:8,//这里是为了突出显示加上的
                        }
                    }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
          formatter:'{value}(万)'
        },
        axisLine:{
                lineStyle:{
                    color:'#fff',
                    // width:8,//这里是为了突出显示加上的
                }
            }
    },
    grid:{
                x:20,
                y:50,
                right:20,
                top:80,
                bottom:10,
                containLabel: true
              },
    series: [
        {
            name:'国民总收入(亿元)',
            type:'line',
            stack: '总量',
            // 显示数值
        // itemStyle : { normal: {label : {show: true}}},
            data:newGmzsrArr
        },
        {
            name:'国内生产总值(亿元)',
            type:'line',
            stack: '总量',
            // 显示数值
        // itemStyle : { normal: {label : {show: true}}},
            data:newGmzsrArr
        },
        {
            name:'第一产业增加值(亿元)',
            type:'line',
            stack: '总量',
            // 显示数值
        // itemStyle : { normal: {label : {show: true}}},
            data:newFirArr
        },
        {
            name:'第二产业增加值(亿元)',
            type:'line',
            stack: '总量',
            // 显示数值
        // itemStyle : { normal: {label : {show: true}}},
            data:newSecArr
        },
        {
            name:'第三产业增加值(亿元)',
            type:'line',
            stack: '总量',
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            data:newThrArr
        },{
            name:'人均国内生产总值(元)',
            type:'line',
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            stack: '总量',
            data:newEveArr
        }
    ],
};
dataChart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello{
  width: 100%;
  background: #4B515D
}
</style>
