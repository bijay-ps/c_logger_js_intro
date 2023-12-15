// var aPerson;
console.log("Line 7: ", aPerson); // undefined
// let aPerson = "Jane Doe";

var aPerson = "Jane Doe";

greet(aPerson);
console.log(aPerson);

// var aPerson = "Jane Doe";
/* Behind the scene it works like this:
var aPerson;
HOISTING
later in code while execute the value "Jane Doe is assigned"
*/

// console.log("Line 22: ", bPerson);// Error
let bPerson = "John Wick";
console.log("Line 24: ", bPerson);

// console.log("Outside func", spy);

function greet(name) {
  let spy = "James Bond";
  console.log("Inside func", spy);
  console.log(`Hello ${name}`);
}
