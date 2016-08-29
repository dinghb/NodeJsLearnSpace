
// load http module.
// Node.js 通过模块(Module)来对外提供外部程序或库
var http = require('http');

// create http server
// offical API see http://nodejs.cn/doc/node/http.html#http_class_http_server
// 匿名函数的参数req : 代表服务器收到的请求(http.ServerQequest)
// 匿名函数的参数res : 代表服务器的响应(http.ServerRespone)  http://nodejs.cn/doc/node/http.html#http_class_http_serverresponse
http.createServer(function(req, res){
    // content header
    res.writeHead(200, {'content-type' : 'text/plain'});

    // write message and single communication is complete
    // http://nodejs.cn/doc/node/http.html#http_response_end_data_encoding_callback
    res.end('Hello World!\n');
    
    // 用来指定端口，监听接入的客户端连接。
    // http://nodejs.cn/doc/node/http.html#http_server_listen_handle_callback
}).listen(8124);

console.log('Server is running on 8124.');