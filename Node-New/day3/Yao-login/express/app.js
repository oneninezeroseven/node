/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 15:19:17
 * @LastEditTime: 2019-09-12 15:24:35
 * @LastEditors: Please set LastEditors
 */
const express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
	res.send('hello');
});
app.listen(12345);
console.log('run server');
