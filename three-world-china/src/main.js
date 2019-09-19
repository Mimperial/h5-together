import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import './assets/reset.css'
import echartsGL from 'echarts-gl' // 引入echarts

Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')