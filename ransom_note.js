let s1 = "abc";
let s2 = "vccaab";

function uniqueString(s1, s2) {
  let isUnique = true;
  let s = "";
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      console.log(s1[i], s1[2]);
      if (s1[i] == s2[j]) {
        s += s1[i];
      }
    }
  }
  console.log(s);
  if (s1 !== s) {
    isUnique = false;
  }
  return isUnique;
}

console.log(uniqueString(s1, s2));
