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
		// {
		//   path: '/hello',
		//   name: 'HelloWorld',
		//   component: components.HelloWorld
		// },
		{
			path: '/login',
			name: 'login',
			alias: '登录页面',
			component: components.Login
		},
		{
			path: '/',
			name: 'index',
			meta: {
				title: '目录页'
			},
			alias: '目录页面', //别名
			component: components.Home
		},
		{
			path: '*',
			name: '404',
			alias: '404页面',
			component: components.NotFindPage
		},
		{
			path: '/note',
			name: 'note',
			alias: '笔记',
			component: components.Note
		},
		{
			path: '/toolbar',
			name: 'toolbar',
			alias: '超简易工具栏',
			component: components.Toolbar
		},
		{
			path: '/mixin',
			name: 'mixin',
			alias: '混入mixin',
			component: components.Model
		},
		{
			path: '/test',
			name: 'test',
			alias: '测试页面',
			component: components.Test
		},
		{
			path: '/code',
			name: 'code',
			alias: '简易代码工具',
			component: components.Code
		},
		// {
		// 	path: '/scroll-css',
		// 	name: 'scroll-css',
		// 	alias: '',
		// 	component: components.ScrollCss
		// },
		{
			path: '/rate',
			name: 'rate',
			alias: '✨评价练习',
			component: components.Rate
		},
		{
			path: '/btn-hover',
			name: 'btn-hover',
			alias: '炫酷按钮',
			component: components.BtnHover
		},
		{
			path: '/panorama',
			name: 'panorama',
			alias: '全景图',
			component: components.Panorama
		},
		{
			path: '/scroll',
			name: 'scroll',
			alias: '上移置顶',
			component: components.Scroll
		},
		// {
		// 	path: '/myh5',
		// 	name: 'myh5',
		// 	alias: '移动web',
		// 	component: components.Myh5
		// },
		{
			path: '/mock',
			name: 'mock',
			alias: 'mock',
			component: components.MockDemo
		},
		{
			path: '/data',
			name: 'mock_data',
			alias: 'mock_data',
			component: components.Data
		},
		{
			path: '/css',
			name: 'css',
			alias: 'css',
			component: components.Css
		},

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