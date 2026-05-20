// date is a built in object in javascript which is used to work with date and time. it has many methods to work with date and time. we can create a date object using the Date() constructor.

// create a date object 
let mydate = new Date();
console.log(mydate); // 2026-05-17T18:07:49.262Z
// 

console.log(mydate.toString()); // Sun May 17 2026 18:07:49 GMT+0000 (Coordinated Universal Time)
// toString() method returns a string representing the specified Date object. The format of the string depends on the implementation of the JavaScript engine, but it is usually in the form of "Day Month Date Year HH:MM:SS GMT Timezone".

console.log(mydate.toDateString()); // Sun May 17 2026
// toTimeString() method returns the time portion of a date object as a string.

console.log(mydate.toTimeString()); // 18:07:49 GMT+0000 (Coordinated Universal Time)
// toLocaleDateString() method returns the date portion of a date object as a string, using locale conventions.

console.log(mydate.toLocaleDateString()); // 5/17/2026
// toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.

console.log(mydate.toLocaleTimeString()); // 6:07:49 PM
// toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix "Z".

console.log(mydate.toISOString()); // 2026-05-17T18:07:49.262Z
// getTime() method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

console.log(mydate.toJSON()); // 2026-05-17T18:07:49.262Z


let myCreateDate = new Date(2020,2,1);
console.log(myCreateDate.toDateString()); // months satrt from 0 in javascript so 2 means march

let myCreateDate2 = new Date(2020,2,1,10,30,45);
console.log(myCreateDate2.toLocaleString()); 

//TimeStamp 
let myTimeStamp = Date.now()
console.log(myTimeStamp); // milisecond
console.log(myCreateDate.getTime()); //milisecond

console.log(Math.floor(Date.now()/1000)); // seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//adding 1 beacuse in js months start from zero 
console.log(newDate.getDay());

new.Date.toLocalString('default',{
    weekday: 'long'
    
})