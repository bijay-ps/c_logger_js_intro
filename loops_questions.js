function numPower(num, pow) {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result = result * num;
  }
  return result;
}

console.log(numPower(2, 3)); // 8
console.log(numPower(2, 4)); // 16
// 2 to power 4 => 2 * 2 * 2 * 2
// 2 * 2
// 4 * 2
// 8 * 2 = 16
// **

function printPattern(range) {
  for (let i = 1; i <= range; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " "; // str = str + j + " "
    }
    console.log(str);
  }
}

printPattern(5);
