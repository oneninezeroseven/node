const request = require('request')
const fs = require('fs')


request('https://588ku.com/?h=bd&sem=1&kw=bd0000020', (error, response, body) => {
    console.log('body:', body);
})