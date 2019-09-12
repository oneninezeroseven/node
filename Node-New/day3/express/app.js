const express = require('express')
// 实例化一个app对象
const app = express()
// 路由 如果匹配到http://localhost:12345/xxx
app.get('/', (req, res) => {
    res.send('hello world')
})
app.post('/abc', (req, res) => {
    res.send('cba')
})
app.put('/abc', (req, res) => {
    res.send('aaa')
})
app.get('/abc', (req, res) => {
    res.send('abc')
})
app.listen(12345)
// restfull后端知识，url语义化
// axios