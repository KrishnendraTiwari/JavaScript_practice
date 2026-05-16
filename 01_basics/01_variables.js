const account_ID = 12345
let account_Email = "badal03@gmail.com"
var account_Password = "badebaal"
account_City = "Bangalore"
let accountState;


// account_ID = 2 
// This will throw an error because account_ID is a constant and cannot be reassigned.

account_Email = "newemail@gmail.com"
account_Password = "newpassword"
account_City = "Mumbai"

console.log(account_ID)

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table({account_ID, account_Email, account_Password, account_City, accountState})
