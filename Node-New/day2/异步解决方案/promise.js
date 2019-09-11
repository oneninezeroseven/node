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
            resolve('b')
        }, 1000)
    })
}

a().then(b).then(c)