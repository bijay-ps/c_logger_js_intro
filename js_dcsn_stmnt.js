// // Creating a variable
// let age = 87;

// console.log(age > 18); // true or false -> Boolean
// console.log(age < 27); // true or false -> Boolean
// console.log(age > 18 && age < 27); // true or false -> Boolean

// // if statement

if (age > 18 && age < 27) {
  // Should ultimately be resolved to boolen
  // Whatever code goes here, is only executed if the condition is true
  let allowedToVoted = "Yes";
  console.log("Line 14:", allowedToVoted);
}

// // console.log(allowedToVoted); // Error, example of block scoped variables

// let underAge = 97;
if (underAge > 18 && underAge < 27) {
  // Should ultimately be resolved to boolen
  // Whatever code goes here, is only executed if the condition is true
  let allowedToVoted = "Yes";
  console.log("Line 14:", allowedToVoted);
} else {
  console.log("Age is not within the limits!!");
}

// let percentile = 85;
// let isVIP = true;

if (percentile > 90) {
  console.log("Admitted to college");
} else if (isVIP) {
  console.log("You are admitted 👏🏼");
} else {
  console.log("No Admission!!, Try next year");
}

// if (percentile > 90 || isVIP) {
//   console.log("Admitted to college");
// } else {
//   console.log("No Admission!!, Try next year");
// }

// if() {

// } else if() {

// } else if() {

// } else if() {

// } else {

// }

// Switch Statement

let dayOfTheWeek = 5;
let dayName;

console.log("line 63: ", dayName);

switch (
  dayOfTheWeek // Not converted to boolean
) {
  case 1:
    dayName = "Monday";
    let learningJS = true; // again a scope variable
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "No one knows!!";
}

console.log("line 76: ", dayName);
// console.log("learningJS: ", learningJS);

let nameOfTheDay = "Wednesday";

switch (nameOfTheDay) {
  case "Monday":
    console.log("Working 😢");
    break;
  case "Tuesday":
    console.log("Working 😢");
    break;
  case "Wednesday":
    console.log("Leave 😀");
    break;
  default:
    break;
}

let aFavNum = 8;
// if (aFavNum === 7) {
//   console.log("Ah! so common");
// } else {
//   console.log("Ahem!! Unique");
// }

aFavNum === 7 ? console.log("Ah! so common") : console.log("Ahem!! Unique");

let i = 2;
let j = 3;

const result = multiplyTwoNums(i, j); // Function was called

const result2 = multiplyTwoNums(-67, 98);

console.log(multiplyTwoNums(15, 45));
console.log("Line 129: ", result);

console.log("Line 131: ", result2);

function multiplyTwoNums(a, b) {
  const res = a * b;
  return res;
}

function sumOfTwoNums(a, b) {
  const res = a + b;
  return res;
}

function ifEven(num) {
  const rem = num % 2;
  if (rem === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

ifEven(12); // Even
ifEven(17); // Odd
ifEven(109); // Odd
ifEven(120); // Even
