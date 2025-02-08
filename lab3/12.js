let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

console.log("6"/"3")

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(0)) // there is false

console.log(Boolean(1))
console.log(Boolean('fdf'))
console.log(Boolean(100))