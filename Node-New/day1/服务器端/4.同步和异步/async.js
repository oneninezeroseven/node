console.log(1)

const a = (callback) => {
    console.log(2)
    callback()
}

// const b = () => {
//     console.log(3)
// }

a(function b() {
    console.log(3)
})
// b()