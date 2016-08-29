
// load http module.
// Node.js 通过模块(Module)来对外提供外部程序或库
var http = require('http');
// 文件系统模块 http://nodejs.cn/doc/node/fs.html#fs_fs_readfile_file_options_callback
var fs = require('fs');

// wirte out numbers to webclient
// 模拟密集计算的过程
function writeNumber(res) {
    var counter = 0;

    // increment global, write to ui-client. 
    for (var i = 0; i < 100; i++) {
        counter++;
        res.write(counter.toString());    
    }
}

// create http server
// offical API see http://nodejs.cn/doc/node/http.html#http_class_http_server
// 匿名函数的参数req : 代表服务器收到的请求(http.ServerQequest)
// 匿名函数的参数res : 代表服务器的响应(http.ServerRespone) http://nodejs.cn/doc/node/http.html#http_class_http_serverresponse
http.createServer(function(req, res){
    // utilities for URL resolution and parsing.  http://nodejs.cn/doc/node/url.html
    // URL Parsing:
    // query: Either the 'params' portion of the query string, or a querystring-parsed object.
    // Example: 'query=string' or {'query':'string'}
    var query = require('url').parse(req.url).query;


    // 获取输入的url(http://localhost:8124/query?file=test)中带有"flle=name"的部分，拼接成相应需要查找的文件。
    // API ==>
    //  http://nodejs.cn/doc/node/querystring.html#querystring_querystring_parse_str_sep_eq_options
    // Example
    //     querystring.parse('foo=bar&baz=qux&baz=quux&corge')
    //   output ==> returns { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
    var app = require('querystring').parse(query).file + ".txt";

    // content header
    res.writeHead(200, {'content-type' : 'text/plain'});

    // write out numbers
    writeNumber(res);

    // timer to open file and read contents.
    setTimeout(function(){
        console.log('opening ' + app);

        // 读取输入的文件，文件的名字通过url传递后解析出来。
        // http://nodejs.cn/doc/node/fs.html#fs_fs_readfile_file_options_callback
        // 异步的方法打开/读取文件，避免单线程应用程序被多个客户端同时访问并进行文件操作(文件操作耗时)导致的堵塞。
        // 使用回调函数，只有当内容已经读入数据缓冲区(data)或者读取失败(err)时，readFile()的回调方法才会被调用。
        fs.readFile(app, 'utf8', function(err, data) {
            if (err) {
                res.write('\n could not find or open file for reading.\n');
            } else {
                res.write(data);
            }

            // respone is done.
            // API ==> http://nodejs.cn/doc/node/http.html#http_response_end_data_encoding_callback
            res.end();
        });
    }, 2000);


    // 用来指定端口，监听接入的客户端连接。
    // http://nodejs.cn/doc/node/http.html#http_server_listen_handle_callback
}).listen(8124, function(){console.log('bound to port 8124')});

console.log('Server is running on 8124.');