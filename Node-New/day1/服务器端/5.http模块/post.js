const http = require('http')
const {
    writeFileSync
} = require('fs')
// post请求 是一个特殊请求，所以需要设计成一个流的形式
// get请求 url 字符串
const server = http.createServer((req, res) => {
    // 设计一个空容器监听请求流
    let body = ''
    // req 是一种请求流
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        // 获取请求体
        console.log(body)
    })
    res.write('success')
    res.end()
})
server.listen(12345) // 0 - 65535