# helloworld.js
## 运行方法  
进入到helloworld.js文件所在的目录，输入命令：
`node helloworl.js `

如果现在后台运行，在linux系统下可以使用命令：
`node helloworld.js &`

浏览器访问 http://localhost:8124/


# asynReadFileAndWrite.js
## sample描述
使用异步的方式读取文件 helloworld.js


# simulteAsynAndSync.js 和 test.txt
## sample描述
结合异步和同步的流程，通过浏览器访问，访问时的URL需要带有file=name，比如 http://localhost:8124/query?file=test
应用程序可以使用数字的循环体模拟密集计算的过程（同步），同时通过异步函数readFile()读取文件。
控制台的输入如下：
   $ node simulteAsynAndSync.js
   Server is running on 8124.
   bound to port 8124
   opening  text.txt

当在Chrom浏览器下时，控制台输入如下
   $ node simulteAsynAndSync.js
   Server is running on 8124.
   bound to port 8124
   opening  text.txt
   opening undefined.txt
此时，最后一行的"opening undefined.txt"，是因为浏览器可能会发送多个请求，此处浏览器发送了一个请求，寻找一个叫favicon.icon的文件。

# invokeNode2000Times.js
## sample描述
使用HTTP模块向服务器端发送2000次同步GET请求，然后同时可使用浏览器访问该服务，达到异步测试的目的。

## 运行方法
首先Node运行 simulteAsynAndSync.js，然后Node运行invokeNode2000Times.js
