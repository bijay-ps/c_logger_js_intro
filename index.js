/*
 this is how you create multiline 
 comment
*/

console.log(a_var);

var a_var = "Rani"; // Creating a variable

console.log(a_var); // Printing the value of x

const flag = false; // Boolean Data type only true or false is allowed

if (flag) {
  var b_var = "new variable";
  let c_var = "inner variable";
  const pi = 3.14;
  console.log(a_var);
  c_var = "Changed!!";
  //   pi = 7; // this line will give error
  console.log(c_var);
}

console.log(b_var);
// console.log(c_var);

function test() {
  let aInFunc = 12;
}

// console.log(aInFunc);

const str = "#JSRocks!!";
console.log(str);

let nothing = null;

let arr = [11, "Bijay", true];
console.log(arr);

let obj = {
  name: "Bijay",
  age: 32,
};

console.log(obj);

function greet() {
  console.log("Namaste!!");
}
greet();
