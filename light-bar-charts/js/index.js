'use strict';

var app = new Vue({
    el: '#app',
    data: function data() {
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
            options: [{
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
                    // _this.$refs.china.style.color = 'orange';
                    // // _this.$refs.china.style.border = '1px solid orange';
                    // _this.$refs.russia.style.color = 'white';
                    // _this.$refs.england.style.color = 'white';
                    // _this.$refs.french.style.color = 'white';
                    // _this.$refs.american.style.color = 'white';
                    d3.csv("../中国城镇人口占总人口比例.csv", function(data) {
                        return data;
                    }).then(function(data) {
                        _this.yjsNums = data;
                        _this.charTitle = "中国城市人口占总人口比例";
                        _this.getChart();
                    });
                    break;
                case "俄罗斯":
                    // _this.$refs.russia.style.color = 'orange'
                    // _this.$refs.china.style.color = 'white'
                    // _this.$refs.england.style.color = 'white'
                    // _this.$refs.french.style.color = 'white'
                    // _this.$refs.american.style.color = 'white'
                    d3.csv("../俄罗斯城镇人口占总人口比例.csv", function(data) {
                        return data;
                    }).then(function(data) {
                        _this.yjsNums = data;
                        _this.charTitle = "俄罗斯城市人口占总人口比例";
                        _this.getChart();
                    });
                    break;
                case "英国":
                    // _this.$refs.england.style.color = 'orange'
                    // _this.$refs.russia.style.color = 'white'
                    // _this.$refs.china.style.color = 'white'
                    // _this.$refs.french.style.color = 'white'
                    // _this.$refs.american.style.color = 'white'
                    d3.csv("../英国城镇人口占总人口比例.csv", function(data) {
                        return data;
                    }).then(function(data) {
                        _this.yjsNums = data;
                        _this.charTitle = "英国城市人口占总人口比例";
                        _this.getChart();
                    });
                    break;
                case "法国":
                    // _this.$refs.french.style.color = 'orange'
                    // _this.$refs.russia.style.color = 'white'
                    // _this.$refs.china.style.color = 'white'
                    // _this.$refs.england.style.color = 'white'
                    // _this.$refs.american.style.color = 'white'
                    d3.csv("../法国城镇人口占总人口比例.csv", function(data) {
                        return data;
                    }).then(function(data) {
                        _this.yjsNums = data;
                        _this.charTitle = "法国城市人口占总人口比例";
                        _this.getChart();
                    });
                    break;
                case "美国":
                    // _this.$refs.american.style.color = 'orange'
                    // _this.$refs.russia.style.color = 'white'
                    // _this.$refs.china.style.color = 'white'
                    // _this.$refs.french.style.color = 'white'
                    // _this.$refs.england.style.color = 'white'
                    d3.csv("../美国城镇人口占总人口比例.csv", function(data) {
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
            let yjsNums3 = _this.yjsNums.map(function(ele) {
                let obj = {
                    '2007': Number(ele['2007']).toFixed(3),
                    '2008': Number(ele['2008']).toFixed(3),
                    '2009': Number(ele['2009']).toFixed(3),
                    '2010': Number(ele['2010']).toFixed(3),
                    '2011': Number(ele['2011']).toFixed(3),
                    '2012': Number(ele['2012']).toFixed(3),
                    '2013': Number(ele['2013']).toFixed(3),
                    '2014': Number(ele['2014']).toFixed(3),
                    '2015': Number(ele['2015']).toFixed(3),
                    '2016': Number(ele['2016']).toFixed(3),
                    '2017': Number(ele['2017']).toFixed(3),
                    '2018': Number(ele['2018']).toFixed(3),
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
                    data: [{
                        name: " ",
                        icon: "circle",
                        textStyle: {
                            color: "#fff" // 图例文字颜色
                        }
                    }]
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
                series: [{
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
                }]
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

})