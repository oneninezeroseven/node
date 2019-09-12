/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 15:48:55
 * @LastEditTime: 2019-09-12 16:01:45
 * @LastEditors: Please set LastEditors
 */
var express = require('express');
// appendFile
var { writeFileSync } = require('fs');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
	let { username, password } = req.body;
	writeFileSync('./input.txt', `${username + password}`);
	// console.log(req.body);
	if (username === 'abc' && password === '123') {
		res.send({
			status: 'success',
		});
	} else {
		res.json({
			status: 'failure',
		});
	}
});

module.exports = router;
