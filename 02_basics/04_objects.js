// 2. using object constructor

// singleton object:- it is an object that can only have one instance. It is used to create a single instance of a class and provide a global point of access to it. 
// when we create an object using object literal syntax, it is a singleton object. It means that we can only have one instance of that object in our code. 
// If we try to create another instance of the same object, it will overwrite the previous instance.

// const tinderUser  = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Badal"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Krishnendra",
            lastname: "Tiwari"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}

const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj 1, obj2} // it will create a new object with obj1 and obj2 as properties


// we can merge two objects using Object.assign() method. It takes two or more objects as arguments and returns a new object that is a combination of all the objects. The properties of the objects are copied to the new object. If there are duplicate properties, the value of the last property will be used.

const obj3 = Object.assign({}, obj1, obj2) // it will merge obj1 and obj2 and return a new object

const obj4 = {...obj1, ...obj2} // it will merge obj1 and obj2 and return a new object using spread operator

console.log(obj3);
console.log(obj4);

const user = [
    {
        id : "1",
        name: "Hamza"
    },
    {
        id : "2",
        name: "Badal"
    },
    {
        id : "3",
        name: "Krishnendra"
    },
    {
        id : "4",
        name: "Mudassir"
    }
]

console.log(user[1].name); // Badal

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it will return an array of keys of the object

console.log(Object.values(tinderUser)); // it will return an array of values of the object

console.log(Object.entries(tinderUser)); // it will return an array of key-value pairs of the object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it will return true if the object has the property, otherwise it will return false

// destructuring an object:- it is a way to extract values from an object and assign them to variables. It is a convenient way to extract values from an object and assign them to variables in a single line of code.

const course = {
    courseName: "BCA",
    courseDuration: "3 years",
    courseFee: "1 lakh",
    college: "XYZ College"
}

// course.courseName
//  we don't want to write this every time to access the property of the course object. We can use destructuring to extract the values from the course object and assign them to variables with the same name as the keys of the object.
const {courseName, courseDuration, courseFee, college} = course // it will extract the values from the course object and assign them to variables with the same name as the keys of the object

console.log(courseName); // BCA
console.log(courseDuration); // 3 years
console.log(courseFee); // 1 lakh
console.log(college); // XYZ College

// API (Application Programming Interface) :- it is a set of rules and protocols for building and interacting with software applications. It is a way for different software applications to communicate with each other. 

// phle API ki values XML format me aati thi vo bahut complex hoti thi, lekin ab JSON (JavaScript Object Notation) format me aati hai. JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.
/*
{
    "id": "123abc",
    "name": "Badal"
}
*/
// https://api.github.com/users/hiteshchoudhary

// sometimes API's in the from of array of objects, for example:-
/*
[
    {
        "id": "1", 
        "name": "Hamza",
    },
    {
        "id": "2",
        "name": "Badal",
    }
]
*/