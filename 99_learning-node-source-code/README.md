

# 目录  
## 第1章 Node.js：启动与运行   
### 1.1  搭建Node开发环境   
1.1.1 Linux（Ubuntu）下安装Node   
1.1.2 Windows7平台下Node+WebMatrix   
1.1.3 升级Node   
### 1.2  开始Node开发   
1.2.1 Hello，WorldinNode   
1.2.2 分析“Hello，World”   
### 1.3  异步函数及Node事件循环   
1.3.1 使用异步方式读取文件   
1.3.2 观察异步程序流程   
### 1.4  Node的优势   
## 第2章 Node与REPL   
### 2.1  REPL：先睹为快和未定义的表达式   
### 2.2  REPL的优势：更好地理解表层之下的JavaScript   
### 2.3  多行以及更复杂的JavaScript   
2.3.1 REPL命令   
2.3.2 REPL和rlwrap   
2.3.3 定制REPL   
### 2.4  不可预计的意外——记得经常保存   
## 第3章 Node核心库   
### 3.1  全局对象：global、process和Buffer   
3.1.1 global   
3.1.2 process   
3.1.3 Buffer   
### 3.2  定时器：setTimeout、clearTimeout、setInterval和clearInterval   
### 3.3  Servers、Streams和Sockets   
3.3.1 TCPSockets和Servers   
3.3.2 HTTP   
3.3.3 UDP数据报套接字   
3.3.4 流、管道和Readline   
### 3.4  子进程   
3.4.1 child_process.spawn   
3.4.2 child_process.exec和child_process.execFile   
3.4.3 child_process.fork   
3.4.4 在Windows系统中使用子进程   
### 3.5  域名解析和URL处理   
### 3.6  Utilities模块和对象继承   
### 3.7  Events和EventEmitter   
## 第4章 Node模块系统   
### 4.1  使用require和默认路径加载模块   
### 4.2  外部模块和Node包管理工具   
### 4.3  如何找到你需要的模块   
4.3.1 Colors：简单至上   
4.3.2 Optimist：另一个简单的小模块   
4.3.3 Underscore   
### 4.4  创建自定义模块   
4.4.1 打包整个目录   
4.4.2 为你的模块发布做准备   
4.4.3 发布模块   
## 第5章 控制流、异步模式和异常处理   
### 5.1  使用Callback而不使用Promises   
### 5.2  顺序调用、嵌套回调、异常捕获   
### 5.3  异步模式和控制流模块   
5.3.1 Step   
5.3.2 Async   
### 5.4  Node编码风格   
## 第6章 路由寻址、服务文件和中间件   
### 6.1  从头开始：创建一个简单的静态文件服务器   
### 6.2  中间件   
6.2.1 Connect基本知识   
6.2.2 Connect中间件   
6.2.3 定制Connect中间件   
### 6.3  Routers   
### 6.4  Proxies   
## 第7章 Express框架   
### 7.1  Express：启动和运行   
### 7.2  app.js文件   
### 7.3  错误处理   
### 7.4  Express与Connect的关系   
### 7.5  路由   
7.5.1 路由路径   
7.5.2 路由和HTTP动词   
### 7.6  关于MVC   
### 7.7  使用cURL测试Express应用程序   
## 第8章 Express、模板系统和CSS   
### 8.1  EJS模板系统（EmbeddedJavaScriptTemplateSystem）   
8.1.1 基本语法   
8.1.2 Node与EJS   
8.1.3 EJS与NodeFilters   
### 8.2  在Express中使用EJS   
8.2.1 多对象环境的改造   
8.2.2 静态文件路由   
8.2.3 处理一个新对象的Post请求   
8.2.4 Widget索引和生成picklist   
8.2.5 显示单个对象并确认对象的删除操作   
8.2.6 提供更新信息的表达以及处理PUT请求   
### 8.3  Jade模板系统   
8.3.1 Jade语法简介   
8.3.2 使用block和extends模块化视图模板   
8.3.3 WidgetView转换为Jade模板   
8.3.4 转换edit和delete表单   
### 8.4  使用Stylus完成简单的CSS样式   
## 第9章 结构化数据、Noe和Redis   
### 9.1  Node和Redis   
### 9.2  构建游戏得分排行榜   
### 9.3  创建消息队列   
### 9.4  为Express应用程序添加统计中间件   
## 第10章 Node和MongoDB：文档中心数据   
### 10.1  MongoDBNativeNode.jsDriver（MongoDB原生Node.js驱动）   
10.1.1 MongoDB入门   
10.1.2 定义、创建以及销毁MongoDBCollection   
10.1.3 为Collection添加数据   
10.1.4 查询数据   
10.1.5 使用Updates、Upserts、Find和Remove   
### 10.2  使用Mongoose实现Widget模块   
### 10.3  重构Widget工厂   
### 10.4  添加MongoDB后台   
## 第11章 Node与关系型数据库   
### 11.1  db—mysql入门   
11.1.1 查询字符串和方法链   
11.1.2 使用查询字符串更新数据库   
11.1.3 使用方法链更新数据库   
### 11.2  使用node—mysql实现本地MySQL访问   
11.2.1 使用node—mysql做基本的CRUD操作   
11.2.2 MySQL事务与mysql—queues   
### 11.3  ORM与Sequelize   
11.3.1 定义模型   
11.3.2 ORM风格的CRUD实现   
11.3.3 添加多个对象   
11.3.4 从关系型到ORM   
## 第12章 图形和HTML5Video   
### 12.1  创建和使用PDF   
12.1.1 使用子进程访问PDF工具   
12.1.2 使用PDFKit创建PDF   
### 12.2  从子进程访问ImageMagick   
### 12.3  通过HTTP提供HTML5Video服务   
### 12.4  创建和流化画布内容（CanvasContent）   
## 第13章 WebSockets和Socket.IO   
### 13.1  WebSockets   
### 13.2  Socket.IO简介   
13.2.1 一个简单的通信范例   
13.2.2 异步世界里的WebSockets   
13.2.3 关于客户端代码   
### 13.3  配置Socket.IO   
### 13.4  Chat：WebSockets版本的“Hello，World”   
### 13.5  在Express中使用Socket.IO   
## 第14章 ode应用程序的测试和调试   
### 14.1  调试   
14.1.1 Node.jsDebugger   
14.1.2 使用NodeInspector的客户端调试   
### 14.2  单元测试（UnitTesting）   
14.2.1 Assert与单元测试   
14.2.2 Nodeunit与单元测试   
14.2.3 其他测试框架   
### 14.3  验收测试   
14.3.1 Soda和Selenium测试   
14.3.2 通过Tobi和Zombie模拟浏览器   
### 14.4  性能测试：基准问题和负载测试   
14.4.1 ApacheBench基准测试   
14.4.2 Nodeload与负载测试   
### 14.5  Nodemon更新代码   
## 第15章 安全及防护   
### 15.1  数据加密   
15.1.1 TSL/SSL配置   
15.1.2 使用HTTPS   
15.1.3 如何安全的保存密码   
### 15.2  认证／授权及Passport   
15.2.1 授权／认证策略：Oauth、OpenID、用户名／密码验证   
15.2.2 LocalPassportStrategy   
15.2.3 TwitterPassportStrategy（OAuth）   
### 15.3  保护应用程序，防止攻击   
15.3.1 不要使用eval   
15.3.2 尽量使用复选框、单选按钮和下拉式选项   
15.3.3 使用node—validator   
### 15.4  在沙箱中执行代码   
## 第16章 扩展和部署Node应用   
### 16.1  把你的节点部署到服务器上   
16.1.1 编写package.json文件   
16.1.2 使用Forever让你的应用“永不掉线”   
16.1.3 使用Node和Apache   
16.1.4 改善性能   
### 16.2  部署到云服务   
16.2.1 通过Cloud9IDE部署到WindowsAzure   
16.2.2 JoyentDevelopmentSmartMachine   
16.2.3 Heroku   
16.2.4 AmazonEC2   
16.2.5 Nodejitsu   