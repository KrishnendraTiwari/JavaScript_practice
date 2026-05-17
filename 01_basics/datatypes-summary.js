// datatypes in javascript

// 1. primitive datatypes
// 2. reference datatypes

// primitive datatypes are immutable, meaning their value cannot be changed once created. They include:

// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint (used for very large numbers)

const score = 100;
const scorevalue = 100.4;
const isloggedin = false;
const outside = null;
let useremail;
const id = Symbol("123");
const anotherid = Symbol("123");

// symbol data type is  used to create unique and immutable identifiers.

console.log(id === anotherid); // false, because each symbol is unique

const bignumber = 345684704748975893475894n; // using 'n' at the end to denote a bigint literal

// javascript is dynamically typed or satically typed language??

/*javascript is a dynamically typed language, which means that variables do not have a fixed type and can hold values of any type.*/


//(non primitive datatypes) reference datatypes are mutable, meaning their value can be changed after creation. They include:

// 1. objects
// 2. arrays
// 3. functions

const heros = ["batman", "superman", "ironman"];

let myobj = {
    name: "tony",
    age: 45,
};

const myfunc = function() {
    console.log("hello world");
}

console.log(typeof heros); // object, because arrays are a type of object in JavaScript
console.log(typeof myobj); // object
console.log(typeof myfunc); // function


//https://262.ecma-international.org/5.1/#sec-11.4.3