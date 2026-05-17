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
/*
// +++++++++++++++++++++

// how many types of memories in javascript

/* In JavaScript, there are two main types of memory: stack and heap.

//------------------------------

// 1. Stack Memory: This is where primitive data types (like numbers, strings, booleans, null, undefined, symbols, and bigints) are stored. The stack is a simple data structure that operates in a last-in-first-out (LIFO) manner. When a function is called, a new block of memory is allocated on the stack for that function's execution context. Once the function finishes executing, its block of memory is released.

// primitive data types me stack memory use hoti hai.

// stack memory use hoti hai means jo bhi variable declare huye hai unka copy milta hai.

//--------------------------

// 2. Heap Memory: This is where reference data types (like objects, arrays, and functions) are stored. The heap is a more complex memory structure that allows for dynamic memory allocation. When an object or array is created, it is stored in the heap, and a reference to that memory location is stored in the stack. This allows for more flexible memory management, as objects can grow and shrink in size as needed.

// reference data types me heap memory use hoti hai.

// heap memory use hoti hai means jo bhi variable declare huye hai unka reference milta hai original value ka, not the actual value. */

//--------------------------

//Example of stack and heap memory:

let a = 10; // stored in stack memory
let b = a; // b gets a copy of the value of a, also stored in stack memory

console.log(a); // 10
console.log(b); // 10

b = 20;
console.log(a); // 10
console.log(b); // 20

//-------------------------------

let obj1 = { 
    name: "Badal",
    age: 25
 }; // stored in heap memory

 let obj2 = obj1; // obj2 gets a reference to the same object in heap memory

console.log(obj1.name); // Badal
console.log(obj2.name); // Badal

obj2.name = "jitu"; // changing the name property of the object through obj2 reference
console.log(obj1.name); // jitu
console.log(obj2.name); // jitu

//-------------------------------

// Explanation of stack and heap memory:

/* In this example, we can see that when we assign obj1 to obj2, they both reference the same object in heap memory. Therefore, when we change the name property through obj2, it also changes for obj1 since they point to the same object. 

//-------------------------------

On the other hand, when we assign a primitive value (like a number) to another variable, it creates a copy of that value in stack memory, so changing one variable does not affect the other. */ 