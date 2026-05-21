// objects:- it is a collection of key value pairs

// creating an object on two ways

// 1. using object literal syntax
let person = {
    name: "ironman",
    "full name": "tony stark", // we can use space in key but we have to use quotes and we can not access it using dot notation we have to use bracket notation
    age: 30,
    cities: ["new york", "los angeles", "san francisco"],
   
};

// accessing object properties
console.log(person.name); // ironman
console.log(person["age"]); // 30
console.log(person["full name"]); // tony stark

// create a Symbole and use it as a key in an object

const mySymbol = Symbol("key1");
const mySymbol2 = Symbol("key2");
const myObject = {
    mySymbol: "value1", // this is a string key, not a symbol key
    [mySymbol2]: "value2" // this is a symbol key
};
console.log(myObject.mySymbol); // value1
console.log(typeof myObject.mySymbol); // string

//accessing the symbol key using the symbol variable in bracket notation
console.log(myObject[mySymbol2]); 
console.log(myObject);

//how to lock an object:- we can use Object.freeze() method to lock an object. It prevents the modification of the object properties. We can not add, delete or modify the properties of a frozen object.

const Employees = {
    name: "Bruce Wayne",
    age: 30,
    city: "new york",
    email: "brucewayne@example.com"
};
console.log(`name: ${Employees.name}`); // Bruce Wayne
Employees.name = "Batman"; // we can modify the properties of the object
console.log(`updated name: ${Employees.name}`); // Batman
Object.freeze(Employees);
Employees.name = "Superman"; // we can not modify the properties of the frozen object
console.log(`frozen name: ${Employees.name}`); // Batman

// how to add function in an object:- we can add a function as a property of an object. It is called a method. We can call the method using the object name and the method name.

const student = {
    name: "Badal",
    "full name": "Badal Mishra",
    age: 20,
    city: "Prayagraj",
    email: "badalmishra@example.com",
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
};

student.greeting = function(){
    console.log("\nHello Students")
}

console.log(student.greeting); // [Function: greeting]
console.log(student.greeting()); // Hello Students

student.greetingtwo = function(){
    console.log(`Hello ${student.name}`)
}
console.log(student.greetingtwo()); // Hello Badal
  

// Note: - when we accessing values  of an objects sometimes we have to use bracket notation instead of dot notation because of some reasons:-
// 1. when the key has space in it
// 2. when the key is a number
// 3. when the key is a symbol