// fs file system文件系统
// 它是操作文件的

const {
    readFile
} = require('fs')
console.log(1)

// 异步非阻塞
readFile('./input.txt', (err, data) => {
    if (err) throw err
    console.log(2)
    // 计算机读出来的不是字符串格式，因为读视频，音频，图片，媒体流
    // buffer 二进制数据格式
    // 二进制转化为字符串
    console.log(data.toString())
})

console.log(3)