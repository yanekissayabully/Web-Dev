let apples = "2";
let oranges = "3";

console.log( apples + oranges );

let apples1 = "2";
let oranges1 = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log( n ); // 14

let counter = 1;
let a1 = ++counter; // (*)

console.log(a1); // 2

let counter1 = 1;
let a2 = counter1++; // (*) changed ++counter to counter++

console.log(a2); // 1