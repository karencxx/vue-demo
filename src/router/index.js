import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import components from '@/router/components'

Vue.use(Router)
Vue.use(iView)
console.log('======', 'router/index')

const router = new Router({
	mode: 'history', // H5 history API
	routes: [
		{
		  path: '/hello',
		  name: 'HelloWorld',
		  component: components.HelloWorld
		},
		{
			path: '/login',
			name: 'Login',
			component: components.Login
		},
		{
			path: '/',
			name: 'index',
			meta: {
				title: '标题在此'
			},
			alias: '/index', //别名
			component: components.Index
		},
		{
			path: '*',
			name: '404',
			component: components.NotFindPage
		},
		{
			path: '/toolbar',
			name: 'toolbar',
			component: components.Toolbar
		},
		{
			path: '/mixin',
			name: 'minxin',
			component: components.Model
		},
		{
			path: '/test',
			name: 'test',
			component: components.Test
		},
		{
			path: '/code',
			name: 'code',
			component: components.Code
		},
		{
			path: '/scroll-css',
			name: 'scroll-css',
			component: components.ScrollCss
		},
		{
			path: '/rate',
			name: 'rate',
			component: components.Rate
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