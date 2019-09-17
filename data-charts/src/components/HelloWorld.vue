<template>
  <div class="hello">
    <div class="input-back">
      <el-select
        v-model="value"
        filterable
        placeholder="其他折线图"
        @change="optionChange"
        style="width: 130px"
        size="mini"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        ></el-option>
      </el-select>
    </div>
    <div id="data-chart" style="width:360px;height:550px;background:#4B515D;padding-top:10px"></div>
    <!-- <div id="data-chart" style="width:365px;height:400px;background:#4B515D;padding-top:10px"></div> -->
    <div style="margin-top:0px;color:#fff">
      <h3>{{charTitle}}</h3>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import * as d3 from "d3";
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      value:'',
      charTitle:'',
      titleTop1: "",
      arrGgtsg: [],
      wszfy: [],
      yjsNums: [],
      options:[
        {
              value: '选项0',
              label: '国内生产总值'
            },
        {
              value: '选项1',
              label: '卫生总费用'
            },
        {
              value: '选项2',
              label: '公共图书馆'
            },
        {
              value: '选项3',
              label: '研究生和留学生数'
            },
      ],
      gnsczzArr:[
        896915.6,
        820099.5,
        737074,
        683390.5,
        642097.6,
        588141.2,
        537329,
        483392.8,
        410354.1,
        347934.9,
        321229.5,
        270704,
        219028.5,
        185998.9,
        161415.4
      ].reverse(),
      gmzsrArr:[
        900309.5,
        820754.3,
        740060.8,
        685992.9,
        641280.6,
        592963.2,
        538580,
        487940.2,
        412119.3,
        348517.7,
        319244.6,
        270092.3,
        219438.5,
        187318.9,
        161840.2
      ].reverse(),
      firArr:[
        64734,
        62099.5,
        60139.2,
        57774.6,
        55626.3,
        53028.1,
        49084.5,
        44781.4,
        38430.8,
        33583.8,
        32464.1,
        27674.1,
        23317,
        21806.7,
        20904.3
      ].reverse(),
      secArr:[
        366000.9,
        332742.7,
        296547.7,
        282040.3,
        277571.8,
        261956.1,
        244643.3,
        227038.8,
        191629.8,
        160171.7,
        149956.6,
        126633.6,
        104361.8,
        88084.4,
        74286.9
      ].reverse(),
      thrArr:[
        469574.6,
        425912.1,
        383373.9,
        346178,
        308082.5,
        277979.1,
        244852.2,
        216120,
        182058.6,
        154762.2,
        136823.9,
        115784.6,
        91759.7,
        77427.8,
        66648.9
      ].reverse(),
      eveArr:[
        64644,
        59201,
        53680,
        50028,
        47005,
        43684,
        39874,
        36302,
        30808,
        26180,
        24100,
        20494,
        16738,
        14368,
        12487
      ],
      xAxisValue: [
            "2018",
            "2017",
            "2016",
            "2015",
            "2014",
            "2013",
            "2012",
            "2011",
            "2010",
            "2009",
            "2008",
            "2007",
            "2006",
            "2005",
            "2004"
          ].reverse(),
      item1:'国民总收入（亿元）',
      item2:'国内生产总值（亿元）',
      item3:'第一产业增加值（亿元）',
      item4:'第二产业增加值（亿元）',
      item5:'第三产业增加值（亿元）',
      item6:'人均国内生产总值（亿元）',
    };
  },
  mounted() {
    // this.callbackCsvFile();
  },
  methods: {
    optionChange(value) {
                this.value = value
                this.callbackCsvFile()
            },
    callbackCsvFile(){
      let _this = this
      // http://h5.ubi-creation.com/csvfile"
      let key = _this.value
      switch (key) {
        case '公共图书馆':
          _this.arrGgtsg = [];
          d3.csv("./公共图书馆.csv", function(data) {
            _this.arrGgtsg.push(data);
            if(_this.arrGgtsg.length > 0){
              _this.charTitle = '公共图书馆'
              _this.getChart();
            }
          });
          break;
          case '卫生总费用':
            _this.wszfy = [];
            d3.csv("./卫生总费用.csv", function(data) {
              _this.wszfy.push(data);
              if(_this.wszfy.length > 0){
                _this.charTitle = '卫生总费用'
                _this.getChart();
              }
            });
            break;
      
          case '研究生和留学生数':
            _this.yjsNums = [];
            d3.csv("./研究生和留学生数.csv", function(data) {
              //_this.yjsNums.push(data);
              return data;
              if(_this.yjsNums.length > 0){
                _this.charTitle = '研究生和留学生数'
              }
            }).then(function (data) {
              console.log(data)
              _this.yjsNums = data
              _this.getChart();
            });

            break;
      
        default:
          break;
      }
      
      // 数据来源：国家统计局,,,,,,,,,,,,,,,,,,,
      // 数据库：年度数据,,,,,,,,,,,,,,,,,,,
      // 时间：最近20年,,,,,,,,,,,,,,,,,,,
      
    },
    getChart() {
      let _this = this;
      // _this.item1 = _this.yjsNums[0].指标
      //           _this.item3 = _this.yjsNums[2].指标
      //           _this.item4 = _this.yjsNums[3].指标
      //           _this.item5 = _this.yjsNums[4].指标
      //           _this.item6 = _this.yjsNums[5].指标
      console.log(_this.yjsNums)
      _this.item1 = _this.yjsNums[0].指标
      _this.item2 = _this.yjsNums[1].指标
      _this.item3 = _this.yjsNums[2].指标
      _this.item4 = _this.yjsNums[3].指标
      _this.item5 = _this.yjsNums[4].指标
      _this.item6 = _this.yjsNums[5].指标
      console.log(_this.item1);
      // for(var i = 0; i < _this.yjsNums.length; i++){
      //             console.log(_this.yjsNums[0].指标)
      //             console.log(_this.yjsNums[1].指标)
      //   }
      var dataChart = this.$echarts.init(document.getElementById("data-chart"));
      let gmzsrArr = _this.gmzsrArr;
      let gnsczzArr = _this.gnsczzArr
      let firArr = _this.firArr;
      let secArr = _this.secArr;
      let thrArr = _this.thrArr;
      let eveArr = _this.eveArr;
      let option = (option = {
        title: {
          text: "",
          textStyle: {
            color: "#fff",
            padding: "3em"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            {
              name: _this.item1,
              icon: "circle",
              textStyle: {
                color: "#fff" // 图例文字颜色
              }
            },
            {
              name: _this.item2,
              icon: "circle",
              textStyle: {
                color: "#fff" // 图例文字颜色
              }
            },
            {
              name: _this.item3,
              icon: "circle",
              textStyle: {
                color: "#fff" // 图例文字颜色
              }
            },
            {
              name: _this.item4,
              icon: "circle",
              textStyle: {
                color: "#fff" // 图例文字颜色
              }
            },
            {
              name: _this.item5,
              icon: "circle",
              textStyle: {
                color: "#fff" // 图例文字颜色
              }
            },
            {
              name: _this.item6,
              icon: "circle",
              textStyle: {
                color: "white" // 图例文字颜色
              }
            }
          ]
        },

        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: _this.xAxisValue,
          axisLine: {
            lineStyle: {
              color: "#fff"
              // width:8,//这里是为了突出显示加上的
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}(万)"
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
              // width:8,//这里是为了突出显示加上的
            }
          }
        },
        grid: {
          x: 20,
          y: 50,
          right: 20,
          top: 80,
          bottom: 10,
          containLabel: true
        },
        series: [
          {
            name: _this.item1,
            type: "line",
            stack: "总量",
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            data: gmzsrArr
          },
          {
            name: _this.item2,
            type: "line",
            stack: "总量",
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            data: gnsczzArr
          },
          {
            name: _this.item3,
            type: "line",
            stack: "总量",
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            data: firArr
          },
          {
            name: _this.item4,
            type: "line",
            stack: "总量",
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            data: secArr
          },
          {
            name: _this.item5,
            type: "line",
            stack: "总量",
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            data: thrArr
          },
          {
            name: _this.item6,
            type: "line",
            // 显示数值
            // itemStyle : { normal: {label : {show: true}}},
            stack: "总量",
            data: eveArr
          }
        ]
      });
      dataChart.setOption(option);
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello {
  width: 100%;
  background: #4B515D;
}
</style>
