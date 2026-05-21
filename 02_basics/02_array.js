
const marvel_heros = ["Thor", "Iron Man","Spider Man"]

const dc_heros = ["Superman", "Batman",]

// using push method to add dc_heros array into marvel_heros array
marvel_heros.push(dc_heros);
console.log("Using push method add two array:-\n")

console.log(marvel_heros);

console.log(marvel_heros[3]);
console.log(marvel_heros[3][1]);

const car = ["BMW", "Audi", "Mercedes"];
const bikes = ["Ducati", "Harley Davidson", "Kawasaki"];
// using concat method to merge two arrays
const vehicles = car.concat(bikes);
console.log("\n using concat method merge two arrays:-\n")
console.log(vehicles);

// using spread operator to merge two arrays
const newarr = [...car, ...bikes, ...dc_heros];
console.log("\n Using spread operator to merge two arrays:-\n")
console.log(newarr);

//using flat method to flatten nested arrays

//creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
// The default depth is 1, meaning it will only flatten one level of nested arrays. 
// If you want to flatten deeper levels, you can specify the depth as an argument to the flat() method. 
// For example, flat(2) will flatten nested arrays up to two levels deep. 
// If you want to completely flatten an array regardless of its depth, you can use flat(Infinity).

const nested_arr = [1,2,3,[4,5,6],7,[16,17,[10,20]]]

const flat_arr = nested_arr.flat(Infinity); 
console.log("\n using flat method to flatten nested array:-\n")
console.log(flat_arr);

console.log(Array.isArray(car)) // checks if the passed value is an Array 

console.log(Array.isArray("Krishnendra")) // it is not an array it is a string



console.log(Array.from("Krishnendra"))

console.log(Array.from({name: "Krish"})) // it will create an array with one element which is the object passed as argument

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // it will create an array with the passed arguments as elements of the array