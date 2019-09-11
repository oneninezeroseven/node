// 断言
const assert = require('assert').strict
try {
    let bool = assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
    console.log(bool)
} catch (e) {
    console.log(e)
}
