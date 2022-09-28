import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const element = <h1>Hello</h1>;
const root = createRoot(document.getElementById("root"));
root.render(element);

//object destructuring

let address = {
  street: "Royal Street",
  city: "New Westminster",
  province: "BC",
};

const { street, city: cityname } = address;

console.log(street, cityname);

//Destructuring incoming function arguments

const showAddress = ({ city, province }) => {
  console.log(`I am in ${city} of ${province}`);
};
showAddress(address);

//Restructuring

const name = "Anu";
const course = "web development";
const showDetails = function () {
  console.log(`name: ${name} course: ${course}`);
};

const instructor = {
  name,
  course,
  address,
  showDetails,
};
console.log(instructor);


const showInstructorDetails = ({name, address:{city}})=>{
    console.log(`${name} of ${city}`)
}
showInstructorDetails(instructor);

//Array Destructuring

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const [first,second] = numbers;

//list matching with commas
let [first, , , fourth] = numbers;
console.log(first, fourth);

//use of spread
//1. to combine arrays
//2. clone arrays
//3. get the remaining elements of array
//4. rest arguments

let firstarr = [1, 2, 3, 4, 5];
let secondarr = [6, 7, 8];

let combined = [...firstarr, ...secondarr];
console.log(combined);

let clone = [...firstarr];
let [last] = [...firstarr].reverse();
console.log(last);

//object spreading

const instructorDetails = { 
    ...instructor, 
    office: "N4315", 
    dept: "CSIS" 
};
console.log(instructorDetails)

//rest parameter

let [firstelement, secondelement, ...remaining] = combined;
console.log(remaining)



displayTourInfo("vancouver", "NewWest", "Richmond", "Burnbay", "Surrey");

function displayTourInfo(...citynames){
const [firstcity, ...remaining] = citynames;
const [last, ...left] = [...remaining].reverse();

console.log(`The tour staring in ${firstcity}`)
console.log(`The tour going through ${left.length} cities`)
console.log(`The tour ending in ${last}.`)
}

//Classes

class Student{
    constructor(name,id){
        this.name = name;
        this.id=id;
    }

    printInfo(){
        console.log(`Name: ${this.name} and ID: ${this.id}`)
    }
}

class PartTimeStudent extends Student{
    constructor(name,id,status){
        super(name,id);
        this.status = status;
    }
    printDetails(){
        console.log(`Name: ${this.name} and ID: ${this.id} and Status: ${this.status}`)
    }
}

const student1 = new Student("John", 101)
const student2 = new PartTimeStudent("John", 101, "part-time")
student1.printInfo();
student2.printDetails();
