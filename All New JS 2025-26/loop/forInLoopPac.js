// Basic Example: Object Iteration

const person = { name: "Alice", age: 25, city: "New York"};
for (let key in person){
     console.log(`${key}: ${person[key]}`);
}

// Array Iteration (Not Recommended)javascript

const arr = ['a', 'b', 'c'];
for (let index in arr) {
  console.log(`Index ${index}: ${arr[index]}`);
}


// Inherited Properties
const obj = { a: 1, b: 2 };
Object.prototype.customProp = 'inherited';
for (let key in obj) {
  console.log(key);
}
// Output:
// a
// b
// customProp
// Fix: Use hasOwnProperty to filter own properties
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}
// Output:
// a
// b

// Sparse Arrays
const sparse = [1, ,3];
for (let index in sparse){
     console.log(`Index ${index}: ${sparse[index]}`);
}

// Modifying Object Properties
const scores = { math: 90, science: 85, history: 88 };
for (let subject in scores) {
  scores[subject] += 5; // Modify values
}
console.log(scores); // { math: 95, science: 90, history: 93 }

// Ex - 1
// Use for...in to log all key-value pairs of the object { name: 'Bob', age: 30, job: 'Developer' }.

const obj6 = { name: 'Bob', age: 30, job: 'Developer' };
for (let key in obj6) {
  console.log(`${key}: ${obj6[key]}`);
}
// Expected Output:
// name: Bob
// age: 30
// job: Developer

// Use for...in to count the number of own properties in the object { a: 1, b: 2, c: 3 }.

const obj7 = { a:1, b:2, c:3, d:5};
let count = 0;
for (let key in obj7){
     if(obj7.hasOwnProperty(key)) count++;
}
console.log(count);

/**
 * hasOwnProperty
 
 *In JavaScript, hasOwnProperty() is a method available on all objects (via Object.prototype) that allows you to determine if an object possesses a specific property directly, rather than inheriting it from its prototype chain.

Key characteristics of hasOwnProperty():
Syntax:
     obj.hasOwnProperty(prop) where obj is the object to check and prop is the string name or Symbol of the property.

Returns a Boolean:
It returns true if the property exists directly on the object, and false otherwise (if the property is inherited or doesn't exist at all).

Distinguishes own properties from inherited properties:

Unlike the in operator, which checks both own and inherited properties, hasOwnProperty() only considers properties defined directly on the object itself.

Handles null or undefined values:
It returns true even if the property's value is null or undefined, as long as the property itself is present.
 */

// Double Object Values:
// Given an object { x: 10, y: 20, z: 30 }, use for...in to double each value.

const obj2 = { x:10, y:20, z:30};
for(let key in obj2){
     obj2[key] *= 2;
}
console.log(obj2); // Expected Output: { x: 20, y: 40, z: 60 } // customProp: NaN


// Filter String Values:
// Use for...in to create a new object containing only properties with string values from { name: 'Alice', age: 25, city: 'Paris', active: true }.

const obj3 = { name: 'Alice', age: 25, city: 'Paris', active: true };
const stringsOnly = {};
for (let key in obj3) {
  if (typeof obj3[key] === 'string') {
    stringsOnly[key] = obj3[key];
  }
}
console.log(stringsOnly); // Expected Output: { name: 'Alice', city: 'Paris' } // object


// Convert Object to Array:
// Use for...in to convert the object { a: 1, b: 2, c: 3 } into an array of [key, value] pairs (e.g., [['a', 1], ['b', 2], ['c', 3]]).

const obj4 = { a:1, b:2, c:3};
const pairs = [];
for (let key in obj4){
     pairs.push([key, obj[key]]);
}
console.log(pairs);

// Check for Property Existence:
// Use for...in to check if an object { name: 'Alice', age: 25 } has a property named 'city'.

const obj8 = { name: "Nasim", age: 20};
let hasCity = false;
for (let key in obj8){
     if (key === "city") hasCity = true;
}
console.log(hasCity);

// Write a function using for...in to merge two objects into one.


function mergeObjects(obj10, obj20){
     const result = {};
     for (let key in obj10){
          result[key] = obj10[key]; // let key in obj1: This part of the code gets each key from obj1 one by one and assigns it to the key variable.
     }
     for(let key in obj20){
          result[key] = obj20[key];
     }
     return result;
}
console.log(mergeObjects({a:1},{b:2}));



// What is the output of this code, and why?javascript

const objs = { a: 1, b: 2 };
Object.defineProperty(objs, 'c', { value: 3, enumerable: false });
for (let key in objs) {
  console.log(key);
}

// Answer:Output: a, b
// Explanation: for...in only iterates over enumerable properties. The c property is non-enumerable (set via Object.defineProperty with enumerable: false), so it’s excluded.



// How would you use for...in to create a deep copy of a simple object (no nested objects)?

function deepCopy(obje){
     const copy = {}
     for (let key in obje){
          if(obje.hasOwnProperty(key)){
               copy[key] = obje[key];
          }
     }
     return copy;
}

const original = { a:1, b: 2};
const copied = deepCopy(original);
copied.a = 20;
console.log(original);
console.log(copied);


// Best Practices :
// Use hasOwnProperty: Always check for own properties to avoid iterating over inherited properties.

// Avoid Arrays: Use forEach, for...of, or for loops for arrays to prevent issues with non-index properties.

// Check for Null/Undefined: Ensure the input is an object to avoid TypeError.

// Use Alternatives for Iterables: Prefer for...of for arrays, Sets, or other iterables.

// Be Cautious with Order: Don’t rely on property order unless using modern JavaScript environments with consistent behavior.






