<template>
  <div class="hello">
    <h1>货币转换器</h1>
    <div class="selset-back">
      <el-select v-model="valueFormCode" filterable placeholder="源货币类型" size="mini">
        <el-option
          v-for="item in currencyList"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
      <el-select v-model="valueToCode" filterable placeholder="目标货币类型" size="mini">
        <el-option
          v-for="item in currencyList"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
      <el-input size="mini" style="width:46%" v-model="beforeMoney" placeholder="转换的金额，单位元"></el-input>
      <el-button size="mini" type="primary" @click="greet" plain>转换</el-button>
    </div>
    <div class="after-money">
      <h1>{{ beforeMoney }}{{ valueFormCode }} = {{ afterMoney }}{{ valueToCode }}</h1>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      msg: "",
      afterMoney: "",
      beforeMoney: "",
      valueFormCode: "",
      valueToCode: "",
      currencyList: [
        {
          value: "Beijing",
          label: "北京"
        }
      ]
    };
  },
  mounted() {
    this.getFormCode();
  },
  methods: {
    getFormCode() {
      let _this = this;
      function formatterDateTime() {
        var date = new Date();
        var month = date.getMonth() + 1;
        var datetime =
          date.getFullYear() +
          "" + // "年"
          (month >= 10 ? month : "0" + month) +
          "" + // "月"
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
          "" +
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          "" +
          (date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes()) +
          "" +
          (date.getSeconds() < 10
            ? "0" + date.getSeconds()
            : date.getSeconds());
        return datetime;
      }

      $.ajax({
        type: "post",
        url: "http://route.showapi.com/105-33",
        dataType: "json",
        data: {
          showapi_timestamp: formatterDateTime(),
          showapi_appid: "104148", //这里需要改成自己的appid
          showapi_sign: "a7b06dbfb7274960838176f986c97991" //这里需要改成自己的应用的密钥secret
        },

        error: function(XmlHttpRequest, textStatus, errorThrown) {
          alert("操作失败!");
        },
        success: function(result) {
          console.log(result); //console变量在ie低版本下不能用
          let objCurrencyList = result.showapi_res_body;
          _this.currencyList = [];
          for (let i in objCurrencyList) {
            var objOption = {};
            objOption.value = objCurrencyList[i];
            objOption.label = i;
            _this.currencyList.push(objOption);
          }

          console.log(_this.currencyList);
        }
      });
    },
    greet() {
      function formatterDateTime() {
        var date = new Date();
        var month = date.getMonth() + 1;
        var datetime =
          date.getFullYear() +
          "" + // "年"
          (month >= 10 ? month : "0" + month) +
          "" + // "月"
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
          "" +
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          "" +
          (date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes()) +
          "" +
          (date.getSeconds() < 10
            ? "0" + date.getSeconds()
            : date.getSeconds());
        return datetime;
      }
      var _this = this;
      $.ajax({
        type: "post",
        url: "http://route.showapi.com/105-31",
        dataType: "json",
        data: {
          showapi_timestamp: formatterDateTime(),
          showapi_appid: "104148", //这里需要改成自己的appid
          showapi_sign: "a7b06dbfb7274960838176f986c97991", //这里需要改成自己的应用的密钥secret
          fromCode: _this.valueFormCode,
          toCode: _this.valueToCode,
          money: _this.beforeMoney
        },

        error: function(XmlHttpRequest, textStatus, errorThrown) {
          alert("操作失败!");
        },
        success: function(result) {
          console.log(result); //console变量在ie低版本下不能用
          if (result.showapi_res_code === 0) {
            //success
            _this.afterMoney = result.showapi_res_body.money;
          }
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1 {
  padding: 20px 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
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

.hello {
  background-color: #4B515D;
}

.selset-back {
  display: flex;
}
</style>
