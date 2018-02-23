const http = require('http')
const url = require('url')

function start(route, handle) {

	function onRequest(req, res) {
		let pathname = url.parse(req.url).pathname;
		console.log('Request for ' + pathname + ' received.');

		route(handle, pathname, res); //将handle对象作为第一个参数传递给route()回调函数

		// res.writeHead(200, {'Content-Type': 'text/json'});
		// res.write('Hello World! ');

		let resp = {
			code : 0,
			time : +new Date(),
			data : {
				name : 'desmond',
				gender : 'male'
			}
		};

		// res.end(JSON.stringify(resp));//将resp转换为JSON字符串返回
	}

	http.createServer(onRequest).listen(8081, '127.0.0.1');
	console.log('Server has started.');
}

exports.start = start;

