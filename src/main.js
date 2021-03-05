// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { h } from 'vue';
import App from './App'
import router from './router'
import store from './vuex/store'
import directives from './directives/index'
import ViewUI from 'view-design'
import axios from 'axios'
import configComponents from './config-components'
import 'view-design/dist/styles/iview.css'
import './theme/index.less';

Vue.config.slient = false //取消Vue所有的日志与警告

require('./mock.js') //引入mock.js
Vue.prototype.$http = axios

Vue.use(router)
Vue.use(directives)
// Vue.use(ViewUI)
configComponents(Vue) //全局注册component

Vue.config.devtools = true
console.log(process.env, process.env.VUE_APP_API_ENV, 'env')
/* eslint-disable no-new */
let app = new Vue({
  store, //inject store to all children
  // el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: () => h(App),
})
let container = document.querySelector('#app')
console.log(container, 'container')
if(container) {
  container.innerHTML = ''
}

app.$mount(container)
//指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和vue实例。
Vue.config.errorHandler = function(err, vm, info){

}