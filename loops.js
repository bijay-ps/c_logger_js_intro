// Basic for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// for(; ;) {

// }
const arr = ["Bijay", 1, 2, "😀"];
arr.isGradute = false;

console.log(arr[3]);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach: It only works with Arrays
arr.forEach(function (x) {
  // for each element of the array execute the function passed to the forEach
  console.log(x);
});

// for in loop: it only works with Objects
const emp = {
  name: "Bijay",
  age: 32,
  desg: "Teacher",
  isGradute: true,
  greet: function greet() {
    console.log("Hello, I am Bijay");
  },
};

// console.log("Line 25: ", emp.attr);

for (let attr in emp) {
  //   console.log("Line 33: ", attr, emp[attr]);
  //   if (attr === "name") {
  //     console.log(attr, emp[attr]);
  //   }
  //   if(emp[attr] !== undefined){}
}

// This is not advisible
// for (let key in arr) {
//   console.log("Line 42: ", key);
// }

// for of loop: Used for Arrays (iterables)
for (let key of arr) {
  console.log("Line 47: ", key);
}

// While loop
let i = 1;
// while (i <= 10) {
//   console.log("Line 53: ", i);
//   i++;
// }

let aNum = Math.random();
// aNum = parseInt(aNum * 6);

// while (aNum < 3) {
//   console.log(aNum);
//   aNum = parseInt(aNum * 6);
// }

// do while
// do {
//   console.log("Line 67: ", i);
//   i++;
// } while (i <= 10);

let userInput;

do {
  userInput = prompt("Enter a positive number: ");
  userInput = parseInt(userInput);
} while (isNaN(userInput) || userInput <= 0);
