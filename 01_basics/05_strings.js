const name = "tony stark";
const repoCount = 50;

// string concatenation

console.log("the name is " + name + " and the repo count is " + repoCount);

// string interpolation (template literals) `` => backticks

console.log(`the name is ${name} and the repo count is ${repoCount}`);

// using object constructor
const gameName = new String("pubg");
console.log(gameName);

// string properties and methods

console.log(gameName[0]); // p
console.log(gameName.__proto__); // String.prototype

console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // PUBG
console.log(gameName.toLowerCase()); // pubg
console.log(gameName); // pubg, because strings are immutable, the original string is not changed

console.log(gameName.indexOf("g")); // 3
console.log(gameName.indexOf("z")); // -1, because z is not found in the string
console.log(gameName.charAt(0)); // p, charAt(index) => returns the character at the specified index    
console.log(gameName.slice(0, 3)); // pub, slice(start, end) => end is not included
console.log(gameName.slice(1)); // ubg, slice(start) => slice from start to the end of the string
console.log(gameName.slice(-3)); // ubg, slice(-n) => slice from the end of the string, -3 is the first character, -2 is the second last character and so on 

console.log(gameName.replace("g", "G")); // pubG, replace(old, new) => replaces the first occurrence of old with new

const newString  = gameName.substring(0, 3); // pub, substring(start, end) => end is not included
console.log(newString);


console.log(gameName.split("")); // ["p", "u", "b", "g"], split(separator) => splits the string into an array of substrings based on the separator
console.log(gameName.split("u")); // ["p", "bg"], split(separator) => splits the string into an array of substrings based on the separator 

const string1 = "     hello   ";
console.log(string1); // "     hello   "
console.log(string1.trim()); // "hello", trim() => removes whitespace from both ends of the string

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-")); // https://hitesh.com/hitesh-choudhary, replace(old, new) => replaces the first occurrence of old with new
console.log(url.includes("hitesh")); // true, includes(substring) => returns true if the substring is found in the string, otherwise returns false