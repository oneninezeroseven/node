// 创建错误提醒 404,502
var createError = require('http-errors');
// express核心模块
var express = require('express');
// node的内置模块
var path = require('path');
// 处理cookie的第三方模块
var cookieParser = require('cookie-parser');
// 打印日志
var logger = require('morgan');


// 路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account')

// app实例
var app = express();

// view engine setup
// /day3/express-cli/views 合并路径
// 输出数据(JSON，XML)res响应头带上json，而不是带html/jade结构，前后端，后端负责提供数据，前端负责渲染数据
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 就是请求会带上打印的日志，配置日志信息
app.use(logger('dev'));
// 请求的数据处理成json 处理post请求的 参数放请求体
app.use(express.json());
// 处理get请求 url上的参数
app.use(express.urlencoded({ extended: false }));
// 处理cookie
app.use(cookieParser());
// 处理静态文件，捕捉带后缀的文件 放前端的页面
app.use(express.static(path.join(__dirname, 'public')));

// 路由，处理前端各种请求 处理前端请求
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account', accountRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// 导出对象
module.exports = app;
