// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import directives from './directives/index'
import iView from 'iview'
import axios from 'axios'
import configComponents from './config-components' 
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.config.slient = false //取消Vue所有的日志与警告

require('./mock.js') //引入mock.js
Vue.prototype.$http = axios

Vue.use(router)
Vue.use(directives)
Vue.use(iView)
configComponents(Vue) //全局注册component

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  store, //inject store to all children
  // el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: h => h(App),
}).$mount('#app')

//指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和vue实例。
Vue.config.errorHandler = function(err, vm, info){

}