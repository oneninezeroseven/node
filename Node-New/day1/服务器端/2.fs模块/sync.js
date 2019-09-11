// fs file system文件系统
// 它是操作文件的

const {
    readFileSync,
    writeFileSync
} = require('fs')
console.log(1)

// 同步阻塞读取 gulp就是把文件读出来，然后做处理，最后写如

//\s[\u4e00-\u9fa5a-z0-9]+
let buf = readFileSync('./index.js')
let str = buf.toString().replace(/console.log\('[a-z0-9]+'\)/g, "");
let str2 = str.replace(/\/\/\s?[\u4e00-\u9fa5a-zA-z0-9]+/g, "");
console.log(str2)
console.log(3)