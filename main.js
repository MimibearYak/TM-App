import Vue from 'vue'
import App from './App'
//import bus
import bus from './public/bus.js'
Vue.prototype.$bus=bus
//请求封装引入
import request from './api/api.js'
import urls from './api/request.js'
Vue.prototype.Urls=urls
Vue.prototype.Request=request

//loading import 
import loading from './components/loading-men/loading-men.vue'
Vue.component('loader-on',loading)
import load from './components/load-refresh/load-refresh.vue'
Vue.component('load-on',load)

import './style/style.css'
//parame component animation
import './pattern/animat.css'
import './pattern/styles.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
