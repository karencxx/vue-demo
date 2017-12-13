import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import Index from  '@/views/Index'

Vue.use(Router)
console.log('======', 'router/index')

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/',
    	name: 'index',
    	meta: {
    		title: '标题在此'
    	},
    	component: Index
    },
    {
    	path: '/index',
    	name: 'index',
    	component: Index
    }
  ]
})
