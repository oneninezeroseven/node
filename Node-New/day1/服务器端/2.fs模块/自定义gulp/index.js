const {
    readFileSync,
    writeFileSync
} = require('fs')
// 从入口文件夹需要处理文件
let code = readFileSync('./src/index.js')
// 利用正则处理文件
let output = code.toString().replace(/console.log\('[a-z0-9]+'\)/g, "");
let output2 = output.replace(/\/\/\s[a-zA-z0-9\u4e00-\u9fa5]+/g, "");
// 写入文件
writeFileSync('./dist/index2.js', output2);