// Array :- JavaScript arrays are resizable and can contain a mix of different data types.
//  They are used to store multiple values in a single variable and provide various methods for manipulating and accessing the data. 
// Arrays can be created using square brackets [] or the Array constructor. They are zero-indexed, meaning the first element is accessed with index 0.

// declare an array using square brackets

const myArr = [0,1,2,3,4,5];

console.log(myArr);
// declare an array using the Array constructor

const myArr2 = new Array(6,2,3,1,5); 

// accessing array elements using index

console.log(myArr2[4]); // zero based index

const myarr3 = ["apple", "banana", "cherry",6,7,8,9];

console.log(myarr3[0]);
//console.log(myarr3[-1]); // negative index is not supported in JavaScript arrays, it will return undefined
console.log(myarr3[5]);

// when we perform copy-operations on arrays in javascript-
//  it creates two type of copies-
// 1. Shallow copy- it creates a new array but the elements are still references to the original array. 
// 2. Deep copy- it creates a new array and also copies the elements, so changes to the new array do not affect the original array.

// Array methods-
// 1. push() - adds an element to the end of the array
console.log("\n Array methods-----: \n");
myArr.push(6);
console.log(`push operation:-\n\nadding element in array: ${myArr}`);

// 2. pop() - removes the last elereduce() - executes a reducer function on each element of the array, resulting in a single output valuement from the array
myArr.pop();
console.log(`\npop operation:-\n\nafter popping element: ${myArr}`);

// 3. shift() - removes the first element from the array
myArr.shift();
console.log(`\nshift operation:-\n\nafter shifting element: ${myArr}`);

// 4. unshift() - adds an element to the beginning of the array
myArr.unshift(9);
console.log(`\nunshift operation:-\n\nafter unshifting element: ${myArr}`);

// 5. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log("\nslice operation:-\n\noriginal array before slicing:- ", myArr);
const slicedArr = myArr.slice(1, 4); // from index 1 to index 3 (4 is not included)
console.log(`sliced array: ${slicedArr}`);
console.log("after slice original array:- ", myArr);

// 6. splice() - adds or removes elements from the array at a specific index
const myn2 = myArr.splice(1,3); 
console.log(`\nsplice operation:-\n\nafter splicing element: ${myn2}`);
console.log("after splice operation original array:- ", myArr);


// 7. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(`\nindexOf operation:-\n\nindex of element 10: ${myArr.indexOf(10)}`);
console.log(`index of element 5: ${myArr.indexOf(5)}`);

// 8. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
console.log(`includes operation:-\n\ndoes array include element 10: ${myArr.includes(10)}`);
console.log(`does array include element 5: ${myArr.includes(5)}`);

// join() - joins all elements of an array into a string and returns this string
const newArr = myArr.join();
console.log(`\njoin operation:-\n\noriginal array: ${myArr}`);
console.log(`joined array: ${newArr}`);
console.log(`type of original array: ${typeof myArr}`);
console.log(`type of joined array: ${typeof newArr}`);