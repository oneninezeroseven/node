console.log(1)

const a = (callback) => {
    console.log(2)
    setTimeout(() => {
        // 留一个电话
        callback()
    }, 1000)
}
// a函数需要消耗一定时间执行的
a(function b() {
    console.log(3)
})
console.log(4)

// 有回调不一定是异步 前端 XHR(ajax) 定时器和延时器
// 异步要有意义必须要有回调
// 回调地狱，异步嵌套，Promise来解决