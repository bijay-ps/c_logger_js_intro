// let fruits = ["🍎", "🍓", "🍇", "🥝", "🍋"];
// console.log("Line 2: ", fruits);

// console.log(fruits[2]);

// let names = ["Jay", "Bijay"];
// fruits[1] = "🍉";
// console.log("Line 7: ", fruits, names);

// let fruitsBasket = new Array(5);
// console.log(fruitsBasket);
// fruitsBasket[0] = "Mango";
// fruitsBasket[1] = "Orange";
// fruitsBasket[2] = "Kiwi";
// fruitsBasket[3] = "Pineapple";
// fruitsBasket[4] = "Banana";
// fruitsBasket.push("Apple");
// console.log(fruitsBasket);

// let animals = ["🐒", "🐮", "🐷"];
// console.log(animals);

// animals.push("🐐");

// console.log(animals);

// const rtrnsAnimal = animals.pop();

// console.log("Line 29: ", animals);
// console.log(rtrnsAnimal);

// animals.pop();
// console.log("Line 33: ", animals);

// const shiftedAnimal = animals.shift();
// console.log(animals);
// console.log(shiftedAnimal);

// animals.unshift("🐂");
// animals.push("🐒");
// console.log(animals);
// animals.push("🐐");
// animals.push("🐟");
// animals.push("🦓");
// animals.push("🐒");

// console.log(animals);
// console.log(animals.indexOf("🐒"));
// console.log(animals.lastIndexOf("🐒"));

// console.log(animals.includes("🐟"));
// console.log(animals.includes("🐴"));

// const myPriorityList = ["PS4", "wife", "kid", "household"];

let animals = ["ant", "bison", "camel", "duck", "elephant"];
//    0       1        2        3        4
//    -5     -4        -3      -2       -1
const newArr1 = animals.slice(2);

console.log(animals);
console.log(newArr1);

const newArr2 = animals.slice(1, 4);
console.log(newArr2);

const newArr3 = animals.slice(-3);
console.log(newArr3);

let months = ["Jan", "March", "April", "June"];

console.log("Months: ", months);

months.splice(1, 0, "Feb");

console.log("Months modified: ", months);

months.splice(4, 1, "May");

console.log("Months modified 2: ", months);

const arr = [14, 23, 29, 100, 51, 55];

// const foundVal = arr.find(function (e) {
//   if (e > 50) {
//     return e;
//   }
// });

const foundVal = arr.filter(function (e) {
  if (e > 50) {
    return e;
  }
});

console.log("foudVal: ", foundVal);

const twosArr = [2, 4, 6, 8, 10];
// for loop
// forEach

const fivesArr = twosArr.map(function (e) {
  return e * 5;
});

console.log(fivesArr);

const elements = ["Fire", "Air", "Water"];
const str = elements.join("*");
console.log(str, typeof str);

const nums = [1, 2, 3];
console.log(nums);
console.log(nums.reverse().join(""));

let arrReduceEx = [1, 2, 3, 4];
const initialValue = 0;

const sumWithValues = arrReduceEx.reduce(function (acc, currVal) {
  return acc + currVal;
}, initialValue);

console.log("sumWithValues: ", sumWithValues);
