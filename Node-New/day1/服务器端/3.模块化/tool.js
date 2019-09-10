const name = require('./config')
const plus = (a, b) => a + b
const sub = (a, b) => a - b

// 到处任何东西 把你的逻辑解耦，分开逻辑，对应的模块做对应的功能
// 方便复用，适合团队开发
module.exports = {
    name,
    sub,
    plus
}