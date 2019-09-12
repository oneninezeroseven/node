var express = require('express');
// 创建路由对象
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/abc', function (req, res, next) {
    res.send('abc');
});

router.get('/abc', function (req, res, next) {
    res.send('cba');
});

module.exports = router;
