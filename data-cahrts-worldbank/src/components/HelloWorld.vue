<template>
  <div class="hello">
    <div class="chart-title">
      <div>
        <h3 style="font-size:18px">&nbsp;&nbsp;{{charTitle}}</h3>
      </div>
    </div>
    <div class="box-data-chart">
      <div id="data-chart" class="bar-chart"></div>
    </div>
    <div class="country-select">
      <ul class="select-opion">
        <li ref="china" @click="geText($event)">中国</li>
        <li ref="russia" @click="geText($event)">俄罗斯</li>
        <li ref="england" @click="geText($event)">英国</li>
        <li ref="french" @click="geText($event)">法国</li>
        <li ref="american" @click="geText($event)">美国</li>
      </ul>
    </div>
     <!-- <div class="data-table" v-for="itemy in yjsNums3 " :key="itemy" :value="itemy">
      <div style="display:flex;flex-direction:row;justify-content:center">
        <div class="data-part1" style>
          <p>
            <span class="table-year">2007年</span>
            <span class="table-value">{{itemy['2007']}}</span>
          </p>
          <p>
            <span class="table-year">2008年</span>
            <span class="table-value">{{itemy['2008']}}</span>
          </p>
          <p>
            <span class="table-year">2009年</span>
            <span class="table-value">{{itemy['2009']}}</span>
          </p>
          <p>
            <span class="table-year">2010年</span>
            <span class="table-value">{{itemy['2010']}}</span>
          </p>
        </div>
        <div class="data-part1">
          <p>
            <span class="table-year">2011年</span>
            <span class="table-value">{{itemy['2011']}}</span>
          </p>
          <p>
            <span class="table-year">2012年</span>
            <span class="table-value">{{itemy['2012']}}</span>
          </p>
          <p>
            <span class="table-year">2013年</span>
            <span class="table-value">{{itemy['2013']}}</span>
          </p>
          <p>
            <span class="table-year">2014年</span>
            <span class="table-value">{{itemy['2014']}}</span>
          </p>
        </div>
        <div class="data-part1">
          <p>
            <span class="table-year">2015年</span>
            <span class="table-value">{{itemy['2015']}}</span>
          </p>
          <p>
            <span class="table-year">2016年</span>
            <span class="table-value">{{itemy['2016']}}</span>
          </p>
          <p>
            <span class="table-year">2017年</span>
            <span class="table-value">{{itemy['2017']}}</span>
          </p>
          <p>
            <span class="table-year">2018年</span>
            <span class="table-value">{{itemy['2018']}}</span>
          </p>
        </div>
      </div>
    </div>  -->
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      value: "中国",
      charTitle: "",
      titleTop1: "",
      arrGgtsg: [],
      lineTableData: [],
      wszfy: [],
      yjsNums: [],
      yjsNums3: [],
      gnsczzArr: [],
      gmzsrArr: [],
      firArr: [],
      secArr: [],
      thrArr: [],
      eveArr: [],
      options: [
        {
          value: "选项1",
          label: "中国"
        },
        {
          value: "选项2",
          label: "俄罗斯"
        },
        {
          value: "选项3",
          label: "英国"
        },
        {
          value: "选项4",
          label: "法国"
        },
        {
          value: "选项5",
          label: "美国"
        }
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
        "2008"
      ].reverse(),
      item1: "国民总收入（亿元）",
      item2: "国内生产总值（亿元）",
      item3: "第一产业增加值（亿元）",
      item4: "第二产业增加值（亿元）",
      item5: "第三产业增加值（亿元）",
      item6: "人均国内生产总值（亿元）"
    };
  },
  mounted() {
    this.optionChange(this.value);
    this.getRequest();
  },
  methods: {
    geText(e) {
      this.optionChange(e.target.innerHTML);
    },
    optionChange(value) {
      let _this = this;
      _this.yjsNums = [];
      // http://h5.ubi-creation.com/csvfile"
      let key = value;
      switch (key) {
        case "中国":
          _this.$refs.china.style.color = 'orange';
          // _this.$refs.china.style.border = '1px solid orange';
          _this.$refs.russia.style.color = 'white';
          _this.$refs.england.style.color = 'white';
          _this.$refs.french.style.color = 'white';
          _this.$refs.american.style.color = 'white';
          d3.csv("./中国城镇人口占总人口比例.csv", function(data) {
            return data;
          }).then(function(data) {
            _this.yjsNums = data;
            _this.charTitle = "中国城市人口占总人口比例";
            _this.getChart();
          });
          break;
        case "俄罗斯":
          _this.$refs.russia.style.color = 'orange'
          _this.$refs.china.style.color = 'white'
          _this.$refs.england.style.color = 'white'
          _this.$refs.french.style.color = 'white'
          _this.$refs.american.style.color = 'white'
          d3.csv("./俄罗斯城镇人口占总人口比例.csv", function(data) {
            return data;
          }).then(function(data) {
            _this.yjsNums = data;
            _this.charTitle = "俄罗斯城市人口占总人口比例";
            _this.getChart();
          });
          break;
        case "英国":
          _this.$refs.england.style.color = 'orange'
          _this.$refs.russia.style.color = 'white'
          _this.$refs.china.style.color = 'white'
          _this.$refs.french.style.color = 'white'
          _this.$refs.american.style.color = 'white'
          d3.csv("./英国城镇人口占总人口比例.csv", function(data) {
            return data;
          }).then(function(data) {
            _this.yjsNums = data;
            _this.charTitle = "英国城市人口占总人口比例";
            _this.getChart();
          });
          break;
        case "法国":
          _this.$refs.french.style.color = 'orange'
          _this.$refs.russia.style.color = 'white'
          _this.$refs.china.style.color = 'white'
          _this.$refs.england.style.color = 'white'
          _this.$refs.american.style.color = 'white'
          d3.csv("./法国城镇人口占总人口比例.csv", function(data) {
            return data;
          }).then(function(data) {
            _this.yjsNums = data;
            _this.charTitle = "法国城市人口占总人口比例";
            _this.getChart();
          });
          break;
        case "美国":
          _this.$refs.american.style.color = 'orange'
          _this.$refs.russia.style.color = 'white'
          _this.$refs.china.style.color = 'white'
          _this.$refs.french.style.color = 'white'
          _this.$refs.england.style.color = 'white'
          d3.csv("./美国城镇人口占总人口比例.csv", function(data) {
            return data;
          }).then(function(data) {
            _this.yjsNums = data;
            _this.charTitle = "美国城市人口占总人口比例";
            _this.getChart();
          });
          break;
      }
    },
    getChart() {
      let _this = this;
      let yjsNums3 = _this.yjsNums.map(function(ele){ 
              let obj={
                '2007':Number(ele['2007']).toFixed(3),
                '2008':Number(ele['2008']).toFixed(3),
                '2009':Number(ele['2009']).toFixed(3),
                '2010':Number(ele['2010']).toFixed(3),
                '2011':Number(ele['2011']).toFixed(3),
                '2012':Number(ele['2012']).toFixed(3),
                '2013':Number(ele['2013']).toFixed(3),
                '2014':Number(ele['2014']).toFixed(3),
                '2015':Number(ele['2015']).toFixed(3),
                '2016':Number(ele['2016']).toFixed(3),
                '2017':Number(ele['2017']).toFixed(3),
                '2018':Number(ele['2018']).toFixed(3),
              }
              return obj
            })
            _this.yjsNums3 = yjsNums3
      _this.item0 = _this.yjsNums[0].国家;
      let itemValue0 = _this.yjsNums[0];
      let oneOfLine0 = [];
      let oneOfLineToFixed0 = [];
      _this.lineTableData = []; // 数据处理成表格
      for (var i in itemValue0) {
        oneOfLine0.push(itemValue0[i]);
        let objline = {};
        objline.year = i;
        objline.country = _this.yjsNums[0].国家;
        objline.value = itemValue0[i];
        _this.lineTableData.push(objline);
      }
      // 为了显示不折叠，去掉小数点后位数
      oneOfLine0.forEach(element => {
        oneOfLineToFixed0.push(Number(element).toFixed(0));
      });
      var dataChart = this.$echarts.init(document.getElementById("data-chart"));
      let gmzsrArr = oneOfLineToFixed0;
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
              name: " ",
              icon: "circle",
              textStyle: {
                color: "#fff" // 图例文字颜色
              }
            }
          ]
        },

        toolbox: {
          show: false,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          },
          top: 0,
          iconStyle: {
            global: false, // 缺省为 false
            borderColor: "white"
          }
        },
        xAxis: {
          type: "category",
          name: "年",
          boundaryGap: false,
          data: _this.xAxisValue,
          axisLine: {
            lineStyle: {
              color: "#fff"
              // width:8,//这里是为了突出显示加上的
            }
          },
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: -45, //度角倾斜显示
            formatter: function(value) {
              //只显示五个字 其余省略号
              return value.length > 5 ? value.substring(0, 5) + "..." : value;
            }
          }
        },
        yAxis: {
          show: true,
          type: "value",
          name: "占比",
          axisLabel: {
            formatter: "{value}%"
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
              // width:8,//这里是为了突出显示加上的
            }
          }
        },
        grid: {
          left: "1%",
          top: 40,
          bottom: 10,
          right: "8%",
          // height:60,
          containLabel: true
        },
        series: [
          {
            name: _this.item0,
            type: "bar",
            stack: "总量",
            // 显示数值
            itemStyle: { normal: { label: { show: true } } },
            barWidth: '20',
            data: gmzsrArr,
            color: "orange"
            // leaves: {
            //     label: {
            //       normal: {
            //         rotate: -65,
            //       }
            //     }
            //   },
          }
        ]
      });
      dataChart.setOption(option);
    },
    getRequest() {
      let url = window.location.search; //获取url中"?"符后的字串
      if (url.indexOf("=") != -1 && url.indexOf("&") != -1) {
        let leftIndex = url.indexOf("=") + 1;
        let rightIndex = url.indexOf("&");
        let str = url.slice(leftIndex, rightIndex); //提取=后&前的内容
        this.optionChange(decodeURI(str));
      } else {
        // let leftIndex = ;
        let str = url.slice(url.indexOf("=") + 1); //提取=后的内容，比如主键
        this.optionChange(decodeURI(str));
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello {
  width: 100%;
  background: rgba(10, 9, 26, 1);
}

.chart-title {
  color: #fff;
  padding-top: 10px;
}

.chart-title div {
  width: 260px;
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #4B515D;
  border-radius: 0 25px 25px 0;
}

.input-back {
  position: absolute;
  left: 50px;
  top: 50px;
  z-index: 999;
}

.box-data-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 10px solid #cccccc8a;
}

.bar-chart {
  width: 360px;
  height: 400px;
}

@media (max-width: 375px) {
  .country-select {
    padding: 20px 20px 0 20px;
    border-bottom: 1px solid #ffffff4a;
  }

  .select-opion {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    color: white;
  }

  .select-opion li {
    font-size: 16px;
    padding: 10px 10px;
  }

  .data-table {
    height: 175px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    margin-top:20px
  }

  .data-part1 {
    display: flex;
    flex-direction: column;
    border-right: 5px solid #4B515D;
  }

  .data-part1:last-child {
    border-right: 0px solid #4B515D;
  }

  .data-part1 p {
    border-bottom: 1px solid #cccccc8a;
  }

  .table-year {
    display: inline-block;
    border-right: 1px solid #ffffff4a;
    padding: 13px 2px;
    background: rgba(255, 255, 255, 0.15);
  }

  .table-value {
    display: inline-block;
    padding: 13px 1px;
    background: rgba(255, 255, 255, 0.21);
  }
}

@media (min-width: 375px) {
  .country-select {
    margin-bottom: 20px;
    padding: 20px 20px 0 20px;
    border-bottom: 1px solid #ffffff4a;
  }

  .select-opion {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    color: white;
  }

  .select-opion li {
    font-size: 16px;
    padding: 10px 11px;
  }

  .data-table {
    height: 175px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
  }

  .data-part1 {
    display: flex;
    flex-direction: column;
    border-right: 5px solid #4B515D;
  }

  .data-part1:last-child {
    border-right: 0px solid #4B515D;
  }

  .data-part1 p {
    border-bottom: 1px solid #cccccc8a;
  }

  .table-year {
    display: inline-block;
    border-right: 1px solid #ffffff4a;
    padding: 13px 9px;
    background: rgba(255, 255, 255, 0.15);
  }

  .table-value {
    display: inline-block;
    padding: 13px 3px;
    background: rgba(255, 255, 255, 0.21);
  }
}
</style>
