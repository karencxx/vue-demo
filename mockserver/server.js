const http = require('http')

http.createServer((req, res) => {
	//返回200，返回头中标识内容为json
	res.writeHead(200, {'Content-Type': 'text/json'});
	let resp = {
		code : 0,
		time : +new Date(),
		data : {
			name : 'desmond',
			gender : 'male'
		}
	};
	res.end(JSON.stringify(resp)); //将resp转换为JSON字符串返回
}).listen(2333, '127.0.0.1');