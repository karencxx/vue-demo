// function start() {
// 	console.log("Request handler 'start' was called.");

// 	//加入阻塞操作, /start加载花了10秒, 阻塞了其他的处理工作, 导致/upload也花了10秒
// 	//Node是单线程，通过实践轮询(event loop)来实现并行操作
// 	function sleep(milliSeconds) {
// 		let startTime = +new Date();
// 		while(+new Date() < startTime + milliSeconds);
// 	}

// 	sleep(10000);
// 	return 'Hello Start';
// }

/*错误 使用非阻塞操作的方式*/
// let exec = require('child_process').exec; //exec()从Node.js来执行一个shell命令
// function start() {
// 	console.log("Request handler 'start' was called.");
// 	let content = 'empty';
// 	exec('ls -lah', function(error, stdout, stderr) {
// 		content = stdout;
// 	});
// 	console.log(content); //empty
// 	return content;
// }

let exec = require('child_process').exec;
function start(response) {
	console.log("Request handler 'start' was called.");

	// exec('ls -lah', function(error, stdout, stderr) {
	// 	response.writeHead(200, {'Content-Type': 'text/json'});
	// 	response.write(stdout);
	// 	response.end();
	// })

	//用来证明/start处理程序中耗时的操作不会阻塞/upload请求做出立即响应
	exec('find /', { timeout: 1000, maxBuffer: 20000*1024}, function(error, stdout, stderr) {
		response.writeHead(200, {'Content-Type': 'text/json'});
		response.write(stdout);
		response.end();
	})
}

// function upload() {
// 	console.log("Request handler 'upload' was called.");
// 	return 'Hello Upload';	
// }

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {'Content-Type': 'text/json'});
	response.write('Hello Upload');
	response.end();
}

function postUpload(response) {
	console.log("Request handler 'post-upload' was called.");

	let body = '<html>' + 
			   '<head>' +
			   '<meta http-equiv = "Content-Type" content="text/html; ' + 
			   'charset=UTF-8" />' + 
			   '</head>' +
			   '<body>' +
			   '<form action="/upload" method="post">' +
			   '<textarea name="text" rows="20" cols="60"></textarea>' +
			   '<input type="submit" value="Submit text" />' +
			   '</form>' +
			   '</body>' +
			   '</html>';
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(body);
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.postUpload = postUpload;
