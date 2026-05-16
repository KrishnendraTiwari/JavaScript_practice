let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

console.log(valueInNumber);

let a = null
console.log(typeof a); //object
console.log(a) //null

let b = undefined
console.log(typeof b); //undefined
console.log(b) //undefined

let c = true
console.log(typeof c); //boolean
console.log(c); //true

// "33" => 33 it is convert in number

// "33abc" => NaN   it is not convert in number 

let num = 1

let newnum = Boolean(num)
console.log(newnum);

// when we convert in boolean

// 1 => true , 0=> false
// " " => false
// "abs" => true

let somenum = 33
let stringnum = String(somenum)

console.log(typeof stringnum);
console.log(stringnum)