//命名用-连接
const componentsList = [
  { prefix: 'v-', name: 'global' }
]

export default function(Vue) {
  componentsList.forEach(function(item, index) {
    // let url = './global-components/' + item.name + '.vue';
    // require(url);
    //上面的写法会报错,url被认为是字符串,因此不能被解析

    /**
     * add the require .default
     * add .default to require('xxx.vue') or import('xxx.vue') it will work right
     * vue-loader- 13.0.0 will set the vue component as a esModule by default. 
     * Before 13.0.0 vue-loader set the vue component as CommonJsModule
     * esModule只读引用
     */
    let comp = require('./global-components/' + item.name + '.vue').default;

    Vue.component(`v-${item.name}`, comp);
  })
}
