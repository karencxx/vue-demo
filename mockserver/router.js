function route(handle, pathname, response) {//直接传递response对象
	console.log('About to route a request for ' + pathname);

	if(typeof handle[pathname] === 'function') {
		handle[pathname](response); //function()
	} else {
		console.log('No request handler found for ' + pathname);
		//如果没有对应的请求处理器处理,直接返回'404'错误
		response.writeHead(404, {'Content-Type': 'text/json'});
		response.write('404 Not Found.');
		response.end();
	}
}

exports.route = route;