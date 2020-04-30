var express = require('express');
// 创建子路由
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // 找views文件夹中index.jade文件
  res.render('index', { title: 'Express' });
});

router.get('/home.html', function (req, res, next) {
  // 找views文件夹中index.jade文件
  res.send('aaaaaaaaa')
});

// 导出路由
module.exports = router;