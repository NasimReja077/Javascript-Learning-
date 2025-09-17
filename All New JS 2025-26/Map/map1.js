// What is the map Method?
// The map method is a built-in JavaScript array method that creates a new array by applying a provided callback function to each element of the original array. It transforms each element according to the logic defined in the callback and returns the new array without modifying the original one. It’s a cornerstone of functional programming in JavaScript, emphasizing immutability and declarative code.
// Introduced: ECMAScript 5 (2009).
// Purpose: Transform data in an array while preserving the original array’s structure and length.
// Category: Non-mutating, iterative array method.

// Syntax and Parameters
// Array.map(callback(currentValue[, index[, array]])[, thisArg])

/**
 * Parameters
 * callback: A function executed for each element in the array. It takes up to three arguments:
 *   currentValue: The current element being processed.
 *   index (optional): The index of the current element.
 *   array (optional): The array map was called upon.
 * thisArg (optional): Value to use as this when executing the callback.
 * Return Value
 * A new array with the results of calling the callback function on every element.
 */


// Creating a Map
// const myNum = new Map();
// const myNum2 = new Map([
//      ["Key1", "value1"],
//      [1, "numberKey"],
//      [{id: 1}, "objectKey"]
// ]);
// console.log(myNum);
// console.log(myNum2);

/**The line const myNum2 = new Map([...]); creates a Map that is initialized with some data. The data is provided as an array of arrays. Each inner array is a pair representing a [key, value].

["Key1", "value1"]: This adds a string key "Key1" with a string value "value1".

[1, "numberKey"]: This adds a number key 1 with a string value "numberKey". This is a key feature of Maps: they can use any data type as a key, unlike regular objects which automatically convert keys to strings.

[{id: 1}, "objectKey"]: This adds an object {id: 1} as a key with a string value "objectKey". This demonstrates the flexibility of Maps—you can even use an object as a key. A regular object would convert this to the string "[object Object]", which can lead to unexpected behavior.

When you console.log(myNum2), you'll see a Map with a size of 3, containing the three key-value pairs you initialized it with. It will look something like Map(3) {"Key1" => "value1", 1 => "numberKey", {id: 1} => "objectKey"}. */

// Creating 2
const myNum = new Map();
const myNum2 = new Map([
     ["Key1", "value1"],
     [1, "numberKey"],
     [{id: 1}, "objectKey"]
]);

// Key Methods and Properties
console.log("Number size:",myNum.size);
console.log("Number2 size:",myNum2.size);


// Methodsset(key, value): Adds or updates a key-value pair. Returns the Map for chaining
myNum2.set("name", "Nasim");
myNum2.set(1, "One");
console.log("Number2 keys:", myNum2.keys());
console.log("Number2 keys:", myNum2);
// output:
// Number2 keys: Map(4) {
//   'Key1' => 'value1',
//   1 => 'One',
//   { id: 1 } => 'objectKey',
//   'name' => 'Nasim'
// }
// because we updated the value for key 1 from "numberKey" to "One" 
// get(key): Retrieves the value associated with the key. Returns undefined if the key doesn’t exist.

// console.log("Number values:", myNum.values());
console.log("Number2 values:", myNum2.values());

// get(key): Returns the value associated with the key, or undefined if not found
console.log("get name is :",myNum2.get("name")); // Nasim
console.log("get 1 is :",myNum2.get(1)); // One // // because we updated the value for key 1 from "numberKey" to "One"
console.log("get nonExistentKey is :",myNum2.get("nonExistentKey")); // undefined
console.log("Get Key1:", myNum2.get("Key1")); // value1

// has(key): Returns true if the key exists, false otherwise
console.log("has name is :",myNum2.has("name")); // true // has give boolean value
console.log(myNum2.has("nonExistentKey")); // false
console.log(myNum2.has(1)); // true

// delete(key): Removes the key-value pair. Returns true if the key existed and was removed, false otherwise

// delete(key): Removes the key-value pair. Returns true if successful, false if the key didn’t exist.
console.log("Delete name is: ", myNum2.delete("name")); // true
console.log("has name is :",myNum2.has("name")); // false

// clear(): Removes all key-value pairs from the Map
// myNum.clear();
// console.log(myNum.size); // 0

// myNum2.clear();
// console.log(myNum2.size); // 0

// keys(): Returns an Iterator of all keys.
for(const key of myNum2.keys()){
     console.log("Returns Keys is ",key);
}

// values(): Returns an Iterator of all values
for(const value of myNum2.values()){
     console.log("Returns Values is ",value);
}

//entries(): Returns an Iterator of arrays [key, value]
for(const [key, value] of myNum2.entries()){
     console.log(`Key: ${key}, value: ${value}`);
}

// forEach(callback(value, key, map), thisArg): Executes a provided function once for each key-value pair
// forEach(callback): Executes a callback for each key-value pair

myNum2.forEach((value, key)=>{
     console.log(`Key: ${key}, value: ${value}`);
});
// Output:
// Key: Key1, value: value1
// Key: 1, value: One
// Key: [object Object], value: objectKey

// Iterating Over a Map
for (const [key, value] of myNum2) {
     console.log(`Key: ${key}, Value: ${value}`);
}
// Output:
// Key: Key1, Value: value1
// Key: 1, Value: One
// Key: [object Object], Value: objectKey
// Note: Maps maintain the insertion order of keys.

// Converting Between Maps and Objects/Arrays
// Map to Array
const mapToArray = Array.from(myNum2); // from() method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log("Map to Array:", mapToArray);
// Output: [ [ 'Key1', 'value1' ], [ 1, 'One' ], [ { id: 1 }, 'objectKey' ] ]

// Array to Map
const arrayToMap = new Map(mapToArray);
console.log("Array to Map:", arrayToMap);
// Output: Map(3) { 'Key1' => 'value1', 1 => 'One', { id: 1 } => 'objectKey' }

// Object to Map
const obj = { a: 1, b: 2, c: 3 };
const objToMap = new Map(Object.entries(obj)); // entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log("Object to Map:", objToMap);
// Output: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// Map to Object
const mapToObj = Object.fromEntries(myNum2); // fromEntries() method transforms a list of key-value pairs into an object.
console.log("Map to Object:", mapToObj);
// Output: { 'Key1': 'value1', '1': 'One', '[object Object]': 'objectKey' }
// Common Pitfalls and Best Practices
// Using for...in with Arrays
// The for...in loop is designed for iterating over the properties of an object, not the elements of an array. When used with arrays, it can lead to unexpected behavior, such as iterating over inherited properties or non-numeric keys.
const arr = [10, 20, 30];
arr.customProp = "I am custom";
for (let index in arr) {
     console.log(`Index ${index}: ${arr[index]}`);
}
// Output:
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index customProp: I am custom
// Best Practice: Use for...of or array methods like forEach, map, filter, etc., for array iteration.
for (let value of arr) {
     console.log(`Value: ${value}`);
}
// Output:
// Value: 10
// Value: 20
// Value: 30
// Best Practice: Use for...of or array methods like forEach, map, filter, etc., for array iteration.
// for...in is not recommended for arrays due to potential issues with inherited properties and non-numeric keys.
// Example of for...of
for (let value of arr) {
     console.log(`Value: ${value}`);
}
// Output:
// Value: 10
// Value: 20
// Value: 30

// Example of forEach
arr.forEach((value, index) => {
     console.log(`Index ${index}: ${value}`);
});
// Output:
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index customProp: I am custom

// Common Pitfalls and Best Practices
// Using for...in with Arrays
// The for...in loop is designed for iterating over the properties of an object, not the elements of an array. When used with arrays, it can lead to unexpected behavior, such as iterating over inherited properties or non-numeric keys. 
// Best Practice: Use for...of or array methods like forEach, map, filter, etc., for array iteration.
// Example of for...of
for (let value of arr) {
     console.log(`Value: ${value}`);
}
// Output:
// Value: 10
// Value: 20
// Value: 30




// Using Objects as Keys // Uses objects as keys, showcasing Map’s flexibility.
const myMaps = new Map();
const user1 = {id: 1};
const user2 = {id:2};

myMaps.set(user1, "Admin");
myMaps.set(user2, "Redar User");

console.log(myMaps.get(user1)); // Admin
myMaps.forEach((value, key)=>{
     console.log(`Redar User ${key.id} : ${value}`);
});




// Basic Transformation
const numbers = [1,2,3,4,5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // Original array remains unchanged   

const names = ['Alice', 'Bob', 'Charlie'];
const indexedNames = names.map((name, index) => `${index + 1}. ${name}`);
console.log(indexedNames); // ['1. Alice', '2. Bob', '3. Charlie']


// Transforming Objects
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ];
// const names = users.map(user => user.name);
// console.log(names); // ['Alice', 'Bob']


// Using thisArg

// const obj = { multiplier: 10 };
// const numbers = [1, 2, 3];
// const multiplied = numbers.map(function(num) {
//   return num * this.multiplier;
// }, obj);
// console.log(multiplied); // [10, 20, 30]


// Chaining with Other Methods
const number = [1, 2, 3, 4, 5];
const results = number
.map(num => num * 2) // [2, 4, 6, 8, 10]
.filter(num => num > 5); // [6, 8, 10]
console.log(results); // [6, 8, 10]


// Handling Sparse Arrays
const sparse = [1, , 3];
const result = sparse.map(num => num * 2);
console.log(result); // [2, , 6]
console.log(sparse); // Original array remains unchanged [1, , 3]
// sparse is a sparse array with a missing element at index 1. The map method skips this missing element, resulting in a new array that also has a missing element at the same index.

// Creating Maps with unique object keys in JavaScript
// https://khotsufyan.medium.com/creating-a-unique-key-map-in-javascript-8968d5ada1ae 



