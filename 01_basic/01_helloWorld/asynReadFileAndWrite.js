
// load http module.
// Node.js 通过模块(Module)来对外提供外部程序或库
var http = require('http');
// 文件系统模块 http://nodejs.cn/doc/node/fs.html#fs_fs_readfile_file_options_callback
var fs = require('fs');

// create http server
// offical API see http://nodejs.cn/doc/node/http.html#http_class_http_server
// 匿名函数的参数req : 代表服务器收到的请求(http.ServerQequest)
// 匿名函数的参数res : 代表服务器的响应(http.ServerRespone) http://nodejs.cn/doc/node/http.html#http_class_http_serverresponse
http.createServer(function(req, res){

    // http://nodejs.cn/doc/node/fs.html#fs_fs_readfile_file_options_callback
    // 异步的方法打开/读取文件，避免单线程应用程序被多个客户端同时访问并进行文件操作(文件操作耗时)导致的堵塞。
    // 使用回调函数，只有当内容已经读入数据缓冲区，readFile()的回调方法才会被调用。
    fs.readFile('helloworld.js', 'utf8', function(err, data) {
        // content header
        res.writeHead(200, {'content-type' : 'text/plain'});
        
        if (err) {
            res.write('\n Could not find or open file for reading\n');
        } else {
            // if no error, write JS file to client
            // http.ServerRespone.write()  http://nodejs.cn/doc/node/http.html#http_response_write_chunk_encoding_callback
            res.write(data);
        }

        // respone is done.
        // API ==> http://nodejs.cn/doc/node/http.html#http_response_end_data_encoding_callback
        res.end();
    });  

    // 用来指定端口，监听接入的客户端连接。
    // http://nodejs.cn/doc/node/http.html#http_server_listen_handle_callback
}).listen(8124, function(){console.log('bound to port 8124')});

console.log('Server is running on 8124.');