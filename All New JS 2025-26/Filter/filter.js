// What is the filter() Method?
// The filter() method is a built-in JavaScript array method introduced in ECMAScript 5 (ES5). It iterates over each element in an array, applies a test function (callback), and returns a new array containing only the elements that satisfy the condition (i.e., for which the callback returns true). The original array remains unchanged, making filter() a non-mutating method.

// Syntax
// array.filter(callback(element[, index[, array]])[, thisArg])

/**
 * Parameters:callback: A function executed for each element in the array. It should return true to include the element in the new array or false to exclude it. The callback receives:element: The current element being processed.
index (optional): The index of the current element.
array (optional): The original array on which filter() was called.

thisArg (optional): A value to use as this when executing the callback function.

Return Value:A new array containing all elements for which the callback returned true.
If no elements pass the test, an empty array [] is returned.

Example:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
 */

const numbers = [1, 2, 3, 4, 5];
const eventNum = numbers.filter((num => num % 2 === 0));
console.log(eventNum); // [ 2, 4 ]
// The callback num => num % 2 === 0 checks if each number is even.
// Only 2 and 4 return true, so they are included in the new array.
const oddNum = numbers.filter((num => num % 2 !== 0));
console.log(oddNum); // [ 1, 3, 5 ]

// Filter Objects by Property
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
const adults = users.filter(user => user.age >= 25);
console.log(adults); // [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]


// Remove Falsy Values
const mixed = [0, 1, false, 2, '', 3, null, undefined];
const truthyValues = mixed.filter(Boolean);
console.log(truthyValues); // [1, 2, 3]

// Filter Strings by Length
const words6 = ['apple', 'banana', 'kiwi', 'grape'];
const longWords = words6.filter(word => word.length > 4);
console.log(longWords); // ['apple', 'banana']


// Filter with Index
const words = ['cat', 'dog', 'elephant', 'fox'];
const longWordsWithIndex = words.filter((word, index) => word.length > 3 && index > 1);
console.log(longWordsWithIndex); // ['elephant', 'fox']

// Filter Unique Values
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = duplicates.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueValues); // [1, 2, 3, 4, 5]

// Note: The filter() method does not modify the original array; it returns a new array. If no elements pass the test, an empty array is returned.
// Also, filter() does not execute the callback for empty slots in sparse arrays.
// It is often used in combination with other array methods like map() and reduce() for more complex data transformations.

// Using thisArg
const minAge = 16;
const filterAdults = function(user){
          return user.age >= this.minAge;
     }
const users5 = [
     { name: "Alice", age: 16},
     { name: "Bob", age: 20},
     { name: "Alce", age: 18}
];
const adults5 = users5.filter(filterAdults, {minAge: 18});
console.log(adults5); // [ { name: 'Bob', age: 20 }, { name: 'Alce', age: 18 } ]

// Chaining with Other Array Methods
const numbers5 = [1, 2, 3, 4, 5, 6];
const doubledEvens = numbers5.filter(num => num % 2 === 0).map(num => num * 2);
console.log(doubledEvens); // [4, 8, 12]
// Filter Nested Arrays
const data = [
  { id: 1, tags: ['js', 'node'] },
  { id: 2, tags: ['react', 'js'] },
  { id: 3, tags: ['python'] }
];
const jsRelated = data.filter(item => item.tags.includes("js"));
console.log(jsRelated); 

// // Polyfill for filter() method
// if (!Array.prototype.filter) {
//   Array.prototype.filter = function(callback, thisArg) {
//     if (this == null) {  // Check for null or undefined
//           throw new TypeError('Array.prototype.filter called on null or undefined');
//      }
//      if (typeof callback !== 'function') {  // Check if callback is a function
//           throw new TypeError(callback + ' is not a function');
//      }
//      const result = [];
//      const array = Object(this);  // Convert this to an object
//      const len = array.length >>> 0;  // Ensure length is a positive integer
//      for (let i = 0; i < len; i++) {
//           if (i in array) {  // Check if the index exists in the array
//                const value = array[i];
//                if (callback.call(thisArg, value, i, array)) {  // Call the callback with thisArg
//                     result.push(value);  // If true, add to result
//                }
//           }
//      }
//      return result;  // Return the new filtered array
//   };
// }         


/**
 * SetA Set is a collection of unique values (no duplicates).
Values can be of any type (primitives, objects, etc.).
Common methods: add(), has(), delete(), forEach(), and properties like size.
Iterable: Can be used in for...of loops or spread into an array ([...set]).

MapA Map is a collection of key-value pairs where keys and values can be of any type.
Unlike objects, keys are not coerced to strings, preserving their type.
Common methods: set(), get(), has(), delete(), forEach(), and properties like size.
Iterable: Can iterate over entries(), keys(), or values().

Both Set and Map are iterable, which allows filtering by converting to arrays or manually iterating.

 */

/**
 * Filtering a SetTo filter a Set, you typically:Convert the Set to an array using the spread operator ([...set]).
Use Array.prototype.filter() to apply the filtering condition.
Convert the filtered array back to a Set if needed.

Syntax for Filtering a Setjavascript
// const filteredSet = new Set([...originalSet].filter(callback));

callback: A function that takes the value (and optionally index and array) and returns true to keep the value or false to exclude it.
The result is a new Set containing only the values that pass the test.
 */

/**
 * Filtering a MapTo filter a Map, you can:Convert the Map’s entries, keys, or values to an array using entries(), keys(), or values() with the spread operator.
Use Array.prototype.filter() to apply the filtering condition.
Create a new Map from the filtered array.

Syntax for Filtering a Mapjavascript

const filteredMap = new Map([...originalMap].filter(([key, value]) => condition));

callback: A function that takes the [key, value] pair (or just value or key, depending on the iterable) and returns true to keep the pair or false to exclude it.
The result is a new Map containing only the key-value pairs that pass the test.
 */

// Filtering a SetExample 1: 
// Filter Even Numbers

const numbersSet = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const evenSet = new Set([...numbersSet].filter(num => num % 2 === 0));
console.log(evenSet); 

//  Filter Strings by Lengthjavascript

const wordSet = new Set(['cat', 'dog', 'elephant', 'fox']);
const longWordSet = new Set([...wordSet].filter(word => word.length > 3));
console.log(longWordSet); // Set { 'elephant' }


//  Filter Using forEach
const numberSets = new Set([10, 15, 20, 25, 30]);
const positiveSet = new Set();
numberSets.forEach(num => {
     if(num > 0) positiveSet.add(num);
});
console.log(positiveSet); // Set { 10, 15, 20, 25, 30 }


// Filtering a MapExample 4: 
// Filter by Value

const scores = new Map([
  ['Alice', 95],
  ['Bob', 80],
  ['Charlie', 60]
]);
const highScores = new Map([...scores].filter(([name, score]) => score >= 85));
console.log(highScores); // Map { 'Alice' => 95 }

// Filter by Key

const users = new Map([
  ['user1', { name: 'Alice', age: 25 }],
  ['user2', { name: 'Bob', age: 30 }],
  ['user3', { name: 'Charlie', age: 20 }]
]);
const onlyusers = new Map([...users].filter(([key]) => key.startsWith("user1")));
console.log(onlyusers); // Map { 'user1' => { name: 'Alice', age: 25 } }
// The startsWith() method in JavaScript is a built-in string method used to determine whether a string begins with the characters of a specified string. It returns a boolean value: true if the string starts with the specified sequence, and false otherwise. 


// : Filter by Nested Propertyjavascript

const users6 = new Map([
  ['id1', { name: 'Alice', age: 25 }],
  ['id2', { name: 'Bob', age: 17 }],
  ['id3', { name: 'Charlie', age: 30 }]
]);
const adult = new Map([...users6].filter(([key, user]) => user.age >= 18));
console.log(adult); // Map { 'id1' => { name: 'Alice', age: 25 }, 'id3' => { name: 'Charlie', age: 30 } }

//  Filter Using forEach
const scores = new Map([
  ['Alice', 95],
  ['Bob', 80],
  ['Charlie', 60]
]);

const passingPoints = new Map();
scores.forEach((value, key) => {
     if(value >= 70){
          passingPoints.set(key, value);
     }
})
console.log(passingPoints); // Map { 'Alice' => 95, 'Bob' => 80 }