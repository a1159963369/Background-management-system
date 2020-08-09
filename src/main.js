import Vue from 'vue'
// import App from './views/yue.vue'
import axios from 'axios';
import App from './App.vue'
// import App from './layout/index.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import router from "./router"
import store from"./store"
// import layout from './layout/layout.vue'



Vue.prototype.$http = axios 
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
