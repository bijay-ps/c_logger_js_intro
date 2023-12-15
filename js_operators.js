// =  assignment variable
let firstVar = 10;
firstVar = 100;

// + addition variable
let firstNum = 189; // "New";
let secondNum = "Flats"; //258;
const res1 = firstNum + " " + secondNum;
console.log(res1);
console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(typeof res1);

let clientsVisited = 10;
// clientsVisited = clientsVisited + 1;
clientsVisited += 5; // this means the same thing as above
clientsVisited += 5;
console.log("Line 18: ", clientsVisited);
// shorthands: -=, *=, /=, %=, **=

let counter = 0;
// counter++; // Post Increment oprtr
console.log("Line 23:", counter);
++counter; // Pre Increment oprtr
console.log("Line 25:", counter);
// counter++;
// console.log("Line 27:", counter);

let third_num = 11;
let frth_num = 2;
console.log("Line 31: ", third_num / frth_num);
console.log("Line 32: ", third_num % frth_num);

console.log("Line 34: ", 2 ** 3);

console.log("Line 36: ", 27 > 12);
console.log("Line 37: ", 27 < 12);
console.log("Line 38: ", 2 >= 2);
console.log("Line 39: ", 2 <= 2);

let impVarA = 7; // number
let impVarB = "7"; // string

console.log("Line 44: ", impVarA == impVarB); // loose Equality check
console.log("Line 45: ", impVarA === impVarB); // Strict Equality Check

console.log("Line 47: ", 2 != "2"); // getting false coz values are same
console.log("Line 48: ", 2 !== "2");

// &&, ||, ! short-circuit operators
let age = 12;
let citizenShip = "Indian";

let condition1 = age >= 18; // Firts check
let condition2 = citizenShip === "Indian"; // second check

console.log("Line 57: ", condition1 && condition2);

let AIR = 101; // (1-100)
let isRich = false;

let check1 = AIR >= 1 && AIR <= 100; // Ranke range
console.log("Line 63: ", check1 || isRich);

let isMarried = false;
console.log("Line No: 66: ", !isMarried);

// & , |, ~

console.log("Line 70: ", 5 & 3);

console.log("Line 72: ", 5 | 3);

console.log("Line 74: ", ~5); // -(x + 1)

console.log("Line 76: ", 2 ^ 3);

console.log("Line 78: ", 3 >> 2);

// console.log("Line 80: ", 3 << 2);

let read = 4; // 0100
let write = 2; // 0010
let execute = 1; // 0001

let myPermissions = 0;
myPermissions = read & execute;

console.log(myPermissions | write);
