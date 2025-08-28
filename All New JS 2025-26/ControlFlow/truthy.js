// In JavaScript, "truthy" and "falsy" refer to how values are evaluated in a Boolean context, such as in if statements or logical operations (&&, ||, !).

// Falsy Values:
// These are values that are considered false when evaluated in a Boolean context. There are a specific set of falsy values in JavaScript:

// false (the Boolean primitive false)
// 0 (the number zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (an empty string)
// null
// undefined
// NaN (Not-a-Number)

// Truthy Values:

// These are all values that are not falsy. Essentially, if a value is not one of the specific falsy values listed above, it is considered truthy in a Boolean context. Examples of truthy values include:

// true (the Boolean primitive true)
// Any non-zero number (e.g., 1, -5, 3.14)
// Any non-empty string (e.g., "hello", "false", "0")
// {} (an empty object)
// [] (an empty array)
// Functions
// Dates

// Example:
// if (0) {
//   console.log("This will not be logged, as 0 is falsy.");
// }

// if ("hello") {
//   console.log("This will be logged, as 'hello' is truthy.");
// }

// let myVariable; // undefined
// if (myVariable) {
//   console.log("This will not be logged, as undefined is falsy.");
// }

// if ({}) {
//   console.log("This will be logged, as an empty object is truthy.");
// }
// https://www.geeksforgeeks.org/javascript/explain-the-concept-of-truthy-falsy-values-in-javascript/

// ========================

// const userEmail = "Nasim@gmail.com" // assume this is a truthy value becose it is a non-empty string // output: Got user email

// const userEmail = "" // assume this is a falsy value becose it is an empty string // output: Don't have user email

const userEmail = [] // assume this is a truthy value becose it is a non-empty array // output: Got user email

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values - 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values -
// "0", 'false', " ", [], {}, function(){} // '' is also truthy // 'false' is also truthy because they are non-empty strings

// Check if the array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Check if the array is not empty
if (userEmail.length > 0) {
    console.log("Array is not empty");
}


// Check object is empty

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// if (Object.keys(userEmail).length === 0) {
//     console.log("Object is empty");
// }

// // Check object is not empty
// if (Object.keys(userEmail).length > 0) {
//     console.log("Object is not empty");
// }


// false == 0 // true
// false === 0 // false
// false == "" // true
// 0 == '' // true
// 0 === '' // false
// false === "" // false
// false == [] // true
// false === [] // false
// false == {} // false
// false === {} // false
// false == null // false
// false === null // false



// Nullish Coalescing Operator (??): null undefined


// Nullish Coalescing operators is used to provide a default value when dealing with nullish values (null or undefined).
// it is a way to fall back to a different value when the original value is null or undefined.
// it is use with the ?? operator. 
// If the left operand is not null or undefined, it returns the left operand; otherwise, it returns the right operand.

// ?? when use firebase , appwrite are use then not acces direactle goth two value , chanch have null valu or undefind valu this tis is use 

let val1;
val1 = 5 ?? 10 // output: 5
// val1 = null ?? 10 // output: 10
// val1 = undefined ?? 15 // output: 15
// val1 = null ?? 10 ?? 20 // output: 10
console.log(val1);

// Nullish Coalescing Operator ?? and ternary operator ? are different
// The ?? operator only checks for nullish values (null or undefined), while the ? operator can check for any falsy value.


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")