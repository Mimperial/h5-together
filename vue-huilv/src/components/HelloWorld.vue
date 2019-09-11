<template>
  <div class="hello">
    
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data (){
    return { msg:'',
    afterMoney:'',
    beforeMoney:'',
    fromCode:'',
    toCode:'',
    }
  },
  mounted(){
        this.greet()
    },
  methods:{
    greet(){
     function formatterDateTime() {
  var date=new Date()
  var month=date.getMonth() + 1
        var datetime = date.getFullYear()
                + ""// "年"
                + (month >= 10 ? month : "0"+ month)
                + ""// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                + ""
                + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                + ""
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                + ""
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
        return datetime;
    }
var _this = this
$.ajax({
    type: 'post',
    url: 'http://route.showapi.com/105-31',
    dataType: 'json',
    data: {
        "showapi_timestamp": formatterDateTime(),
        "showapi_appid": '104148', //这里需要改成自己的appid
        "showapi_sign": 'a7b06dbfb7274960838176f986c97991',  //这里需要改成自己的应用的密钥secret
        "fromCode":_this.fromCode,
        "toCode":_this.toCode,
        "money":_this.beforeMoney
    },

    error: function(XmlHttpRequest, textStatus, errorThrown) {
        alert("操作失败!");
    },
    success: function(result) {
        console.log(result) //console变量在ie低版本下不能用
        if(result.showapi_res_code === 0){
          //success
          _this.afterMoney = result.showapi_res_body.money
        }
    }
});
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
