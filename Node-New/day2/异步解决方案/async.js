function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a')
            resolve('a')
        }, 2000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b')
            resolve('b')
        }, 1000)
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c')
            resolve('c')
        }, 1000)
    })
}

// (() => {
//     // 等待a完成
//     a();
//     b();
//     c();
// })();
// async await，本质上是对promise的改进
(async () => {
    // 等待a完成 停2秒
    let val = await a();
    console.log(val)
    await b();
    console.log('d')
    await c();
    console.log('e')
})();

// a().then(b).then(c)

// $()
//     // a
//     .addClass()
//     // a
//     .css()
//     // b
//     .find()
//     // c
//     .css()