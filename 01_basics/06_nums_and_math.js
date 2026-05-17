const score = 400
console.log(score); // 400

const balance = new Number(1000);
console.log(balance); // [Number: 1000]

console.log(balance.toString().length); // 4

console.log(balance.toFixed(2)); // 1000.00

const othernum = 123.87366

console.log(othernum.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(hundreds.toLocaleString('en-US')); // 1,000,000

// ++++++++++ Maths ++++++++++

console.log("Maths Methods\n-----------------");

console.log(Math);
console.log(`mod of -5 => ${Math.abs(-5)}`); // 5 mod function negative number ko positive me convert karta hai

console.log(`round of 4.6 => ${Math.round(4.6)}`); // 5 round function number ko nearest integer me convert karta hai

console.log(`round of 4.3 => ${Math.round(4.3)}`); // 4

console.log(`ceil of 4.3 => ${Math.ceil(4.3)}`); // 5 ceil function number ko next integer me convert karta hai 

console.log(`floor of 4.7 => ${Math.floor(4.7)}`); // 4 floor function number ko previous integer me convert karta hai

console.log(`max of 1, 2, 3, 4, 5 => ${Math.max(1, 2, 3, 4, 5)}`); // 5
console.log(`min of 1, 2, 3, 4, 5 => ${Math.min(1, 2, 3, 4, 5)}`); // 1
console.log(`random number between 0 and 1 => ${Math.random()}`); // random number between 0 and 1

console.log(`random number between 0 and 10 => ${Math.random() * 10}`); // random number between 0 and 10

console.log(`random integer between 0 and 5 => ${Math.floor(Math.random() * 6)}`); // random integer between 0 and 5

console.log(`random integer between 1 and 6 => ${Math.floor(Math.random() * 6) + 1}`); // random integer between 1 and 6 adding 1 to make it between 1 and 6 instead of 0 and 5 

const min = 15;
const max = 30;
 

console.log(`random integer between 15 and 30 => ${Math.floor(Math.random() * (max - min + 1)) + min}`); // random integer between 15 and 30

const min2 = 1;
const max2 = 6;
console.log(`random integer between 1 and 6 =>  ${Math.floor(Math.random() * (max2 - min2 + 1)) + min2}`); // random integer between 1 and 6    