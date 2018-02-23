var server = require('./server');
var router = require('./router');
//将一系列请求处理程序通过一个对象来传递,并且需要使用松耦合将该对象注入到route()函数中
var requestHandlers = require('./requestHandlers'); 

//将不同url映射到相同的请求处理程序
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/postUpload'] = requestHandlers.postUpload;


server.start(router.route, handle);