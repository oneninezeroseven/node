const crypto = require('crypto');
const secret = 'hello world';
const hash = crypto.createHmac('sha256', secret).digest('hex');;
console.log(hash)