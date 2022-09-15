import React from "react";
import ReactDOM from "react-dom";
//JSX -> react element
const element = <h1>Hello World!!</h1>;

ReactDOM.render(element, document.getElementById("root"));

//let -> block scoped
//var -> function scoped
//const -> block scoped

//Objects - bind

const person = {
  name: "Anu",
  talk: function () {
    console.log(this);
  },
  walk() {
    console.log(this);
  },
};

console.log(person.name);
person.talk();

const myFunc = person.walk.bind(person);
console.log(myFunc);
myFunc();

//function expression and arrow functions -> not hoisted

const sayGreeting = function (message = "hi", name = "anu") {
  console.log(`${message} ${name}!!`);
};
sayGreeting();
sayGreeting("hello");

//Arrow Functions
const sayHello = () => {
  console.log("Hello");
};
sayHello();

const square = (num = 2) => `The square of ${num} is ${num * num}.`;
console.log(square());

console.log(square1(5));
function square1(num) {
  return num * num;
}

//for loop, for-in, for of, forEach
const fruits = ["Apple", "Banana", "Strawberry", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//for in -> not with array
//iterates over the properties of the object
for (let i in fruits) {
  console.log(fruits[i]);
}

const car = {
  color: "red",
  model: "2021",
  type: "Sedan",
};

for (let i in car) {
  let str = `${i}: ${car[i]}`;
  console.log(str);
}
for (const fruit of fruits) {
  console.log(fruit);
}
fruits.forEach((fruit, index, arr) => {
  const str = `${index}: ${fruit} ${arr}`;
  console.log(str);
});

//map, reduce, filter, find, index
const fruitsnew = fruits.map((fruit, index) => {
//   return `<li>${fruit}</li>`;
  return <li>{fruit}</li>;
});
console.log(fruitsnew)