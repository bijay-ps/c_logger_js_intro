let fName = "Bijay Singh";
// console.log(fName[0]);
fName[0] = "A";
// fName = "Jay";
let lName = "Singh";
let age = 32;

// let pD = fName + " " + lName
const patienDetails = `${fName} ${lName}, age: ${age}`;

// console.log(patienDetails);
// console.log(str1, typeof str1);

// console.log("My name is ", fName, " ", lName, " I am ", age, " years old");
// console.log(`My name is "${fName} ${lName}". I am ${age} years old`);

let aSentence =
  'Nelson Mandela quotes: "As long as poverty, injustice, and gross inequality persist in our world, none of us can truly rest."';
// console.log(aSentence);

// `` => Backticks in JS template literal
const newWay = `My way or high way!!`;
// console.log(newWay);

let smallName = "chotu";
let bigName = "Chotu";

// console.log("Line 28: ", smallName === bigName);

let anyStr = "chOtU";
// console.log(anyStr.length);

// console.log(anyStr.toUpperCase());
// console.log(anyStr.toLowerCase());
// console.log(anyStr);
// console.log(anyStr.indexOf("o"));
// console.log(anyStr.indexOf("O"));
// console.log(fName.concat(" ").concat(lName));
// console.log(anyStr.charAt(3));
// console.log("    Bijay Singh  ".trim());

const stmnt = "The quick brown fox jumps over the lazy dog.";

// console.log(stmnt.slice(31));
// console.log(stmnt.slice(4, 19));
// console.log(stmnt.slice(-4));

const replaceStr =
  "The quick brown fox jumps over the lazy dog. If the Dog reacted, was it really lazy dOg?";

// console.log(replaceStr.replaceAll("dog", "monkey"));

const regex = /Dog/gi; // i means case insensitive

// console.log(replaceStr.replaceAll(regex, "monkey"));

// const elements = "Air Water Fire";
const url = "https://www.airmeet.com/event/123";
const splittedres = url.split("//");
// console.log(splittedres);

let nameB = "Bijay\nSingh";

// console.log(nameB);

const fruits = ["Apple", "Ornages", "Banana"];
fruits[2] = 12;
console.log(fruits);
