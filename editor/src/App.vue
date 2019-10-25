<template>
  <div id="app" class="app">
  
      <div class="app_box_left">
          <el-menu
            :default-active="activeIndex" 
            class="el-menu-vertical-demo"
            @select="handleSelect"
            background-color="#525c65"
            active-text-color="#ffd04b"
            text-color="#fff"
            >
            <div class="tab-list">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span @click="$router.push({path:'/'})">我的桌面</span>
             
            </el-menu-item>
            </div>
            <div class="tab-list">
            <el-menu-item index="2">
                <i class="el-icon-tickets"></i>
                <span @click='$router.push({path:"/Collect"})'>收藏</span>
             
            </el-menu-item>
            </div>
            <div class="tab-list">
            <el-menu-item index="3">
                <i class="el-icon-notebook-1"></i>
                <span @click="$router.push({path:'/RecycleBin'})">回收站</span>
            </el-menu-item>
            </div>
          </el-menu>
        </div>
        <div class="app_box_right">
          
          <router-view/>
        </div>

        
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        activeIndex: '1'
      }
    },
    mounted () {

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="stylus">
html,body{
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 16px !important;
  }
  a{
    text-decoration: none;
    color: #ffffff;
  }
  
  .app{
    display flex;
    height: 100%;
    width: 100%;
  }
  .app_box_left{
    display flex;
    flex-direction :column;
    height: 100%;
    width: 130px;
    background: #525c65;
  }
  .tab-list{
    height:50px;
    text-align:center;
    margin:5px 0;
    line-height:50px;
    color:#fff
  }
  .app_box_list{
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
  }
  .app_box_list:hover{
    background: #409eff;
  }
  .app_box_list_color{
    background: #409eff;
  }
  .app_box_right{
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }

 
</style>
