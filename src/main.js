import Vue from 'vue'
import app from './app'
import router from './router'
import Header from './components/Header/Header'
import Star from './components/Star/Star'

import store from './store'

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)


new Vue({
  el: '#app',
  render: h => h(app),
  router,//配置路由器
  store,//配置vuex
})
