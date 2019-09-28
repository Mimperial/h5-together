<template>
  <div class="hello">
    <!-- background:#4B515D; -->
    <div id="threedWorld" style="width:370px;height:500px;padding-top:10px"></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {
    this.become3Dworld();
  },
  methods: {
    become3Dworld() {
      var myChart = this.$echarts.init(document.getElementById("threedWorld"));
      var canvas = document.createElement("canvas");
      var mapChart = this.$echarts.init(canvas, null, {
        width: 100,
        height: 200
      });

      mapChart.setOption({
        geo: {
          type: "map",
          map: "world",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [[-180, 90], [180, -90]],
          itemStyle: {
            normal: {
              areaColor: "transparent",
              borderColor: "#fff"
            },
            emphasis: {
              areaColor: "yellow"
            }
          },
          label: {
            show: false
          }
        }
      });

      let option = {
        backgroundColor: "#000",
        globe: {
          baseTexture: "./data-1491890179041-Hkj-elqpe.jpg",
          heightTexture: "./data-1491889019097-rJQYikcpl.jpg",

          displacementScale: 0.1,

          shading: "lambert",

          environment: "./data-1491837999815-H1_44Qtal.jpg",

          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },

          layers: [
            {
              type: "blend",
              texture: mapChart
            }
          ]
        },
        series: []
      };

      myChart.setOption(option);

      // for (let i = 0; i < 50; i++) {
      //   option.series[1].data = option.series[1].data.concat(getRandomData());
      // }

      // function getRandomData() {
      //   return {
      //     coords: [
      //       [Math.random() * 135.2, Math.random() * 53.33],
      //       [121.51585, 31.23045]
      //     ],
      //     value: (Math.random() * 30).toFixed(2)
      //   };
      // }

      myChart.setOption(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
