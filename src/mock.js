//尝试一下mockjs，mock数据
//添加mock规则
const Mock = require('mockjs');

//获取 mock.Random 对象
const Random = Mock.Random;

//mock data
const producerNewsData = function() {
	let articles = [];
	for(let i = 0; i < 100; i++) {
		let newArticleObject = {
			title: Random.csentence(5, 30), //Random.csentence( min,max )
			thumbnail_pic_s: Random.dataImage('300*350', 'mock的图片'), // Random.dataImage( size, test) 生成一段随机的 base64 图片编码
			author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
			date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式，默认为yyyy-mm-dd: Random.time 返回一个随机时间字符串
		}

		articles.push(newArticleObject);
	}

	return {
		articles: articles
	}
}

// Mock.mock( url, post/get, 返回的数据)
Mock.mock('/news/index', 'post', producerNewsData);