const fs = require('fs')
const request = require('request')
// 自动找node_modules里卖弄jquery文件夹
// 再自动找package.json里面的main字段，根据该字段引入对应的js

const { JSDOM } = require('jsdom')
request
const template = fs.readFileSync('./index.html')
const {
    window,
    document
} = new JSDOM(template)
const $ = require('jquery')(window)
// console.log($('p').addClass('abc'))
$('img').each((index, item) => {
    let src = $(item).attr('src')
    request(`http:${src}`).pipe(fs.createWriteStream(`./imgs/${index}.png`))
    console.log(src)
})
// console.log($('img'))
// node 没有DOM和BOM
// 伪造DOM和BOM
// 爬虫技术
// console.log($)