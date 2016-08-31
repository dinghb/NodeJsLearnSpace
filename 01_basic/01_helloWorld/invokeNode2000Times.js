var http = require('http');

// The http request url options
var option = {
    host: 'localhost',
    port: '8124',
    path: '/?file=secondary',
    method: 'GET'
};

var processPulicTimeLine = function(response) {
    console.log('finished request.');
}

for (var i = 0; i < 2000; i++) { 
    //API ==> http://nodejs.cn/doc/node/http.html#http_http_request_options_callback
    http.request(option, processPulicTimeLine).end();
}