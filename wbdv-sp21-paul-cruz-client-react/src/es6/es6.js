let myInteger = 123
let myString = "QWE"
let someObject = {
    anIntegerProp: 123,
    aStringProp: "123123",
    anObjectProperty: {
        anotherObjectProp: {q: 111, w: 222},
        anotherArrayProp: [321, 432, 543] },
    aNumberArrayProp: [1, 2, 3], anObjectArrayProp: [
        {a:123,b:234}, {a:321,b:432}]}
console.log(someObject.anObjectProperty.anotherArrayProp[2]) // ==> 543
console.log(someObject["anObjectProperty"].anotherArrayProp[2]) // ==> 543

let anotherObject = {}
anotherObject["newObject"] = 123
console.log(anotherObject.newObject)


// function change
function addEs5(a, b) {
    // console.log(a, b)
    return a + b
}
addEs5(2, 3)
let ewq = addEs5(2, 3)
console.log(ewq)

// initial version
// const addEs6 = (a, b) => {
//     console.log(a, b)
//     return a + b
// }
// addEs6(4,5)

// adv version
const addEs6 = (a, b) =>  a + b
let rew = addEs6(4,5)
console.log(rew)

// const square = (b) => b * b
const square = b => b * b
rew = square(4)
console.log(rew)

// es6 version array
let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = all.filter(i => i % 2 === 0)
let odd = all.filter(i => i % 2 !== 0)
// console.log(all, even, odd)

// try to debug
let even = all.filter(i => {
    console.log(i);
    return i % 2 === 0;
})
console.log(even)

// mapping
let alls = [1, 2, 3, 4]
let squares = alls.map(i => i * i)
console.log(alls, squares)

// in the array the order matters, but in the object the oder doesn't matter