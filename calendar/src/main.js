import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'vue-element-extends/lib/index.css'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'

Vue.use(ElementUI)
Vue.component('chart', ECharts)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')