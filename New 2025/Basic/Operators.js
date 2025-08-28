// Arithmetic Operators: +, -, *, /, %, **, ++, --
// Assignment Operators: =, +=, -=, *=, /=, %=
// Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
// Logical Operators: &&, ||, !
// Ternary Operator: condition ? value1 : value2

// ------------------------------------

let a = 10;
let b = 3;

console.log(a % b);
console.log(a ** b);
// --------------
let num = 5;
num += 3; // ?
num *= 2; // ?
console.log(num);
// ------------------
// Ternary Operator – Write a condition to check if a number is even or odd
let num1 = 10;
let result = (num % 2 === 0)? "even": "odd";
console.log(result);
// -------------
let marks = 75;
let grade = (marks >= 90) ? "A+" :
(marks >= 80) ? "A" :
(marks >= 70) ? "B+" :
(marks >=40) ? "C" : "F";
console.log(grade);


