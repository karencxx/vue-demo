import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import Index from  '@/views/Index'
import NotFindPage from '@/components/404'
import Toolbar from '@/components/Toolbar'
import Model from '@/components/Model'
import Test from '@/test/test'
import Code from '@/code/code'

Vue.use(Router)
Vue.use(iView)
console.log('======', 'router/index')

const router = new Router({
	mode: 'history', // H5 history API
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
			alias: '/index', //别名
			component: Index
		},
		{
			path: '*',
			name: '404',
			component: NotFindPage
		},
		{
			path: '/toolbar',
			name: 'toolbar',
			component: Toolbar
		},
		{
			path: '/mixin',
			name: 'minxin',
			component: Model
		},
		{
			path: '/test',
			name: 'test',
			component: Test
		},
		{
			path: '/code',
			name: 'code',
			component: Code
		}
	]
})

router.beforeEach((to, from, next) => {
	iView.LoadingBar.start()
	next()
})

router.afterEach(route => {
	iView.LoadingBar.finish()
})
export default router