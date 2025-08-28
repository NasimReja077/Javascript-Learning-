// Functions is a block of code designed to perform a particular task.
// Functions definition consists of the function name, parameters, and the code block.
// Functions call is the process of invoking or executing the function.
// Functions can return a value back to the caller using the return statement.
// Functions can also have default parameter values.
// Functions can be anonymous, meaning they do not have a name.
// function parameters are like local variables of the function and block scoped

// function functionName(){
//      // Function body
// }
// function functionName(parameter1,parameter2){
//      // Function body
// }
// functionName() // Function call

// function myFunction(msg) { // Function definition // parameter is input
//   console.log(msg); // Log the message
// }
// myFunction("Hello, World!"); // Function call with argument



// function greet(name = "Guest") { // Function definition with default parameter
//   console.log(`Hello, ${name}!`);
// }
// greet(); // Calling the function without an argument
// greet("Alice"); // Calling the function with an argument



// Arrow Function
// Arrow Function is a concise way to write function expressions in JavaScript.
// it is syntactically different from regular function expressions.
// it does not have its own this context.
// It allows you to omit the function keyword and use a more compact syntax.

// const functionName = (parameter1, parameter2) => {
//   // Function body
// };


// const add = (a, b) => {
//   return a + b;
// };


// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }





// Rest Parameters is a way to represent an indefinite number of arguments as an array.
// it is useful when you want to create a function that can accept any number of arguments.
// it allows you to pass a variable number of arguments to a function.
// it is implemented using the rest parameter syntax (...args)
// it was introduced in ES6
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Rest Parameters in JavaScript
// Definition: Rest parameters in JavaScript allow a function to accept an indefinite number of arguments as an array. They are denoted by three dots (...) followed by a parameter name in a function's parameter list. This is useful when you want to work with multiple arguments without explicitly defining each one.
// Syntax:
function myFunction(...restParameter) {
  // restParameter is an array containing all passed arguments
  // restParameter is an array of all arguments passed to the function
}
//----------------pactic qusen on rest parameters-----------------------
// Basic rest parameters example
function sum(...num){
  return num.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7)); // Output: 28
console.log(sum(5, 10, 15)); // Output: 30
console.log(sum()); // Output: 0


// Greet multiple users
function greet(greeting, ...names) {
  return names.map(name => `${greeting}, ${name}!`).join(" ");
}
console.log(greet("Hello", "Alice", "Bob", "Charlie")); // Output: "Hello, Alice!, Hello, Bob!, Hello, Charlie!"


function displayInfo (first, second, ...others){
  console.log(`first: ${first}`);
  console.log(`second: ${second}`);
  console.log(`others: ${others}`);
}
displayInfo("Apple", "Banana", "Cherry", "Mango", "Orange", "Berries", "Pineapple");

//Filter Strings
// Create a function filterStrings that accepts a type parameter (e.g., 'string', 'number') and a variable number of arguments, returning an array of only those arguments that match the specified type.
// Example: filterStrings('string', 1, 'hello', 2, 'world') should return ['hello', 'world'].

function filterStrings(type, ...args){
  return args.filter(item => typeof item === type)
}
console.log(filterStrings('string', 1, 'hello', 2, 'world')); // Output: ['hello', 'world']

// Concatenate Strings
// Write a function concatStrings that takes a separator and a variable number of strings, then concatenates them with the separator.
// Example: concatStrings('-', 'a', 'b', 'c') should return 'a-b-c'.

function concatStrings(separator, ...strings) {
  return strings.join(separator);
}
console.log(concatStrings('-', 'a', 'b', 'c')); // Output: 'a-b-c'

// Count Arguments
// Write a function countArgs that uses rest parameters to return the number of arguments passed to it.
// Example: countArgs(1, 'hello', true) should return 3.

function countArgs(...args) {
  return args.length;
}
console.log(countArgs(1, 'hello', true)); // Output: 3



// Notes
// Rest vs. Spread: Rest parameters collect arguments into an array, while the spread operator (...) expands an array or object into individual elements. Example of spread:javascript

// const arr = [1, 2, 3];
// console.log(...arr); // Output: 1 2 3

// Rest parameters are particularly useful in scenarios like function composition, event handlers, or APIs where the number of inputs is unpredictable.

// They allow for more flexible and reusable code by enabling functions to handle varying numbers of arguments gracefully.
//----------------END-----------------------
// scope
// Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation. This means you can use functions and variables before they are declared in the code.
// it is important to understand hoisting to avoid issues related to variable initialization and function declarations.
// it was introduced in ES5 and has been a fundamental concept in JavaScript ever since.
// example:

// sayHello(); // Works: "Hello!"
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello(); // Works: "Hello!" // error 
// console.log(addOne(5));
// function addOne(num) {
//   return num + 1;
// }

// addTwo(5); // Hoisting
// const addTwo = function (num) {
//   return num + 2;
// };


// example: console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// addTwo(5); // Hoisting
const addTwo = function (num) {
  return num + 2;
};
