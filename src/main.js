// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
// import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../static/bootstrap-4.3.1-dist/js/bootstrap.min.js'
import 'element-ui/lib/theme-chalk/index.css';
// import $ from 'jquery'
import axios from "axios";
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(VCharts)
// Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)

})
