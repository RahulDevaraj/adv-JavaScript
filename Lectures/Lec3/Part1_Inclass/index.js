import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const element = <h1>Hello</h1>;
const root = createRoot(document.getElementById("root"));
root.render(element);

//higher order functions
//1. forEach

const fruits = ["apple", "orange", "strawberry", "grapes", "blueberry"];
fruits.forEach((fruit, index) => {
  console.log(`${index} ${fruit}`);
});

//2. map
const newFruits = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
console.log(newFruits);
root.render(<ul>{newFruits}</ul>);

//3. filter

/* const filteredFruits  = fruits.filter(fruit=>fruit.includes("berry"))
console.log(filteredFruits); */
const filteredFruits = fruits
  .filter((fruit) => fruit.includes("berry"))
  .map((fr) => `<li>${fr}</li>`);
console.log(filteredFruits);

//4. reduce

const numbers = [3, 5, 6, 8, 9, 0, 11];
/* const ans = numbers.reduce((prev, cur) => {
    console.log(prev,cur)
  prev = prev + cur;
  return prev;
},100);
console.log(ans) */

const ans = numbers.reduce((prev, cur) => prev + cur, 100);
console.log(ans);
//reduce(()=>{},init val)

//5. find
let result = fruits.find((fruit) => !fruit.includes("berry"));
console.log(result);

//6. findindex
result = fruits.findIndex((fruit) => !fruit.includes("berry"));
console.log(result);

//7. some -> one or more meet the criteria
result = fruits.some((fruit) => !fruit.includes("berry"));
console.log(result);
//8. every > all meet the criteria
result = fruits.every((fruit) => !fruit.includes("berry"));
console.log(result);

let jobs = [
  { jobID: 101, name: "print", jobStatus: "Queued" },
  { jobID: 102, name: "log", jobStatus: "started" },
  { jobID: 103, name: "backup", jobStatus: "completed" },
  { jobID: 104, name: "disk frag", jobStatus: "completed" },
];

//return back (as a single string) the names of the jobs which have been completed 