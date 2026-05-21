// function is a block of code that performs a specific task. It can be reused multiple times in a program. Functions can take parameters and return values.

// function without parameters

function sayHello() {
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

sayHello();

// function declaration with parameters

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// calling the function
addTwoNumbers(3, 5); // this will print 8 to the console

const result = addTwoNumbers(10, 20) // result will be undefined because the function does not return anything. It only prints the result to the console. If we want to store the result in a variable, we need to return the value from the function.

console.log("Result:", result);

// parameters :- parameters are the variables that are defined in the function declaration. 
// arguments :- arguments are the values that are passed to the function when it is called.

function multiplyTwoNumbers(num1, num2) {
    // we can directly return the result without storing it in a variable like this:
    // return num1 * num2;
    
    let mul = num1 * num2;
    return mul; // return the result to the caller
    console.log("This will not be executed"); // this line will not be executed because it is after the return statement
}

const multiplicationResult = multiplyTwoNumbers(4, 6); // this will return 24 and store it in the variable multiplicationResult

console.log("Multiplication Result:", multiplicationResult);


console.log("\n---------------------------\n");   

function loginUserMessage(username) {
    return `${username} just logged in`;
}

loginUserMessage("Badal"); // this will return "Badal" just logged in" but it will not be printed to the console because we are not logging it.

console.log(loginUserMessage("Badal")); // this will print "Badal just logged in" to the console because we are logging the return value of the function.
console.log(loginUserMessage()); // this will print undefined just logged in" to the console    

// how to sole this problem of undefined? we can set a default value for the parameter like this:

console.log("\nwhen username is not provided:-----\n");

function loginUser(user) {
    if(user === undefined) {
    console.log("Please provide a username");
    return;
    }
    return `${user} just logged in`;
}
console.log(loginUser()); // this will print "Please provide a username" to the console because we are checking if the user is undefined and returning early from the function.


function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100, 200)); // this will return 100 because the function only takes one parameter and ignores the second argument. The first argument is assigned to num1 and the second argument is ignored.

// how to solve this problem of ignoring extra arguments? we can use the rest operator (...) also known as the spread operator to collect all the arguments into an array like this:

function calculateTotalPrice(...prices) {
    return prices
}

console.log(calculateTotalPrice(100, 200, 300)); // this will return [100, 200, 300] because the rest operator collects all the arguments into an array and returns it.

// how to pass an object as an argument to a function?

const user ={
    name: "Badal",
    age: 25,
    email: "badal@example.com"
}

function displayUserInfo(anyuser) {
    console.log(`Name: ${anyuser.name}`);
    console.log(`Age: ${anyuser.age}`);
    console.log(`Email: ${anyuser.email}`);
}

displayUserInfo(user); // this will print the user information to the console by accessing the properties of the user object.

//we can also pass the object  directly to the function like this:

displayUserInfo({
    name: "Hamza",
    age: 30,
    email: "hamza@example.com"
})

// We can also pass an array as an argument to a function:

const myArray = [100, 200, 300, 400, 500];

function displayArrayElements(arr) {
    return arr;
}
console.log(displayArrayElements(myArray)); // this will return [100, 200, 300, 400, 500] because we are passing the array as an argument to the function and returning it.

// we can also pass the array directly to the function like this:

console.log(displayArrayElements([10, 20, 30, 40, 50])); // this will return [10, 20, 30, 40, 50] because we are passing the array directly to the function and returning it.