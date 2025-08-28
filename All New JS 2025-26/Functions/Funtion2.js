// Destructured is a JavaScript expression that allows unpacking values from arrays or properties from objects into distinct variables.
// it simplifies the extraction of values from complex data structures.
// it is particularly useful when working with APIs or complex data models.

// Example:
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Output: "Alice"
console.log(age);  // Output: 30

let arr = [1, 2, 3];
let [a, b, c] = arr;
// No need for manual assignment
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
console.log(a, b, c); // Output: 1 2 3


let Arr = [1, 2, 3, 4, 5];
let [x, y, z, ...rest] = Arr;
console.log(x, y, z, rest); // Output: 1 2 3 [4, 5]
// rest contains the remaining elements [4, 5]
// because of the spread operator

let Arr2 = [1, 2, 3, 4, 5];
let [p, , , ...others] = Arr2;
console.log(p, others); // Output: 1 [4, 5]

let Arr3 = [1, 2, 3, 5];
let {k, o} = { k: 1, o: 5};
console.log(k, o); // Output: 1 5

let arr4 = [1, 2, 3, 5];
let obj = { ...arr4 }; // object property shorthand
console.log(obj); // Output: { '0': 1, '1': 2, '2': 3, '3': 5 }
function sum(v1 , v2, v3){
     return v1 + v2 + v3;
}
console.log(sum(...arr4)); // Output: 6


let obj2 = {
     name: "Herry",
     company: "ABC Corp",
     age: 25,
     address: "123 Main St"
}

// console.log({ ...obj2, name: "Nasim", age: 23}) // Output: { name: 'Nasim', company: 'ABC Corp', age: 23, address: '123 Main St' }

console.log({  name: "Nasim", age: 23, ...obj2}) // Output: { name: 'Herry', age: 25, company: 'ABC Corp', address: '123 Main St' }

// because the spread operator overwrites the previous values with the same key
// In this case, the name and age properties are taken from the new object
// The company and address properties remain unchanged
// The spread operator allows for easy merging of objects
// It can be particularly useful in scenarios like updating user profiles or settings
// For example, when a user updates their information, you can merge the new data with the existing profile


// Destructuring Array passed as a function parameter
// employee details in the form of an array...
let emp_info = ["Nasim", 1001, "SDE Intern"];
// Function made to retrieve the employee's data
// by using Parameter Destructuring...
let info = ([emp_name, emp_id, emp_job]) =>{
     console.log(`Employee's name: ${emp_name}, Employee ID: ${emp_id}, Job Title: ${emp_job}`);
};
info(emp_info); /// This code is contributed by Aman Singla...


// Function to get Employee details
    // an array containing the employee 
    // details is passed as a function 
    // parameter
    // emp details array
const emp = ['Rohit', 1211, 'Software Engineer'];
    // Skipping the employee name i.e. 
    // emp[0] from the array passed
function getDetails([ , id, designation]){
     console.log(`Employee ID: ${id}, Designation: ${designation}`);
}
getDetails(emp);

// https://www.geeksforgeeks.org/javascript/parameter-destructuring/

// Default values:
const emp2 = ['Bob', 2021, 'Data Analyst'];
function getDetail([,id ,designation, companyName = 'ABC Tech']){
          console.log(`Employee ID: ${id}, Designation: ${designation}, Company: ${companyName}`);
     }     
getDetail(emp2); // Output: Employee ID: 2021, Designation: Data Analyst, Company: ABC Tech     
// Here, companyName is not provided in the emp2 array, so it defaults to 'ABC Tech'.
// The default value is used when the corresponding array element is undefined.
// In this case, companyName is assigned the value 'ABC Tech' because emp2[3] is undefined.
// The spread operator allows for easy merging of objects
// It can be particularly useful in scenarios like updating user profiles or settings
// For example, when a user updates their information, you can merge the new data with the existing profile


//  Destructuring an object passed as a function parameter: Now, using the same example as above, we'll access only the required properties of an employee object (emp) passed as an argument to the getDetails function.

const emp5 = { 
        name: 'SAM', 
        id: 1011, 
        designation: 'Software Engineer' 
    };

    // Using aliases to access the emp properties
    // skipping the 'name' property
    function getDetails({ id: empID, designation: desg }) {
        console.log(`Employee ID: ${empID}, Designation: ${desg}`);
    }
    getDetails(emp5);


// Nested Function 
function outer(name){
     function inner(){
          return `Hello, ${name}`;
     }
     return inner(); // Return the function itself, not its result
}
console.log(outer("Nasim")); // Output: Hello, Nasim


function makeCounter() {
  let count = 0; // Closure variable
  function increment() { // Inner function
    count++;
    return count;
  }
  return increment; // Returning the inner function
}
const counter = makeCounter(); // Creating a counter instance
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3


// Scope Chain in Javascript.
// bake 

// function outer() {
//   let outerVar = "I'm from outer";

//   function inner() {
//     let innerVar = "I'm from inner";
//     console.log(outerVar); // Accessing outer function variable
//     console.log(innerVar); // Accessing inner function variable
//   }
//   return inner;
// }
// const innerFunc = outer();
// innerFunc();


// Understanding Immediately Invoked Function Expression(IIFE).
// it is use to execute a function immediately after its creation
// it is use for global scope pollution
// global scope pollution sa ploblem horia kai bar us sa bach na ke lea 

// (function chai(){ // name IIFE
//      console.log(`DB Connected`);
// })();

// ; is impotont
// () // function definition
// () // execution call

// ((name) => {  // unname IIFE // parameter
//      console.log(`Hello, ${name}`);
// })("John");

// // writh 2 IIFE (; is impotont for both saparead )
// (function(){
//    console.log(`IIFE 1`);
// })(); // << ;
// (function(){
//    console.log(`IIFE 2`);
// })();


// Scope
// Scope is three type 1> Global Scope 2> Function Scope 3> Block Scope
// it determines the accessibility of variables

// Global scope
// { 
//      let a = 8; // let in block level scope
// }
// console.log(a); // ReferenceError: a is not defined

// { 
//      var a = 8; // var is global scope
// }
// console.log(a); // ReferenceError: a is not defined



// function ax(){
//      let a = 8; // function scope
//      console.log(p); // 10
//      console.log(a); // 8
// }
// ax();
// console.log(a); // ReferenceError: a is not defined




let q = 10 // global scope
function bx(){
     let b = 8; // function scope
     console.log(q); // 10
     console.log(b); // 8
}
bx();
console.log(q); // 10
console.log(b); // ReferenceError: b is not defined

// function and block are both are local scopes 

// Hoisting

// Closures
// Closures is a feature in JavaScript where an inner function has access to the outer function's variables even after the outer function has finished executing.
// Example:

// function outer() {
//   let outerVar = "I'm from outer";

//   function inner() {
//     let innerVar = "I'm from inner";
//     console.log(outerVar); // Accessing outer function variable
//     console.log(innerVar); // Accessing inner function variable
//   }
//   return inner;
// }
// const innerFunc = outer();
// innerFunc();

