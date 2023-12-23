const person = {
  name: "john wick",
  age: 42,
};

function getName(user) {
  return user.name;
}

function captalizeTheName(str) {
  return str.toUpperCase();
}

function addSalutation(str) {
  return `Mr. ${str}`;
}

// const fn = getName(person);
// console.log(fn);
// const capitals = captalizeTheName(fn);
// console.log(capitals);
// const withMr = addSalutation(capitals);
// console.log(withMr);

// console.log(addSalutation(captalizeTheName(getName(person))));

const result = [getName, captalizeTheName, addSalutation].reduce(
  (initialInput, func) => func(initialInput),
  person
);
console.log(result);
