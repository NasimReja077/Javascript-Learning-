// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// =======================================================

// for...of LoopThe for...of loop iterates over iterable objects (e.g., arrays, strings, maps, sets), accessing their values directly. It’s cleaner than for...in for arrays.

// Syntax:
// for (let value of iterable) {
//   // Code to execute
// }


// Example (Array):javascript

const fruits = ["Apple", "Banana", "Orange"];
for (let froote of fruits) {
  console.log(froote);
}
// Output:
// Apple
// Banana
// Orange

// Example (String):javascript

for (let char of "Hello") {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o

// With Objects (using Object.entries):javascript

const person = { name: "Alice", age: 25 };
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25

// Use Case:Iterating over array elements or other iterables cleanly.

// ========================================================


// const Array1 = ['A','B','C'];

// for (const element of Array1){
//      console.log(element);
// }

// const iterable = [10,20,30,40,50];

// for (let value of iterable){
//      value += 1;
//      console.log(value);
// }

// const iterable = new Map([
//      ["A", 1],
//      ["B", 2],
//      ["C", 3],
// ]);

// for (const entry of iterable){
//      console.log(entry);
// }

// for (const [key, value] of iterable){
//      console.log(value);
// }


// const iterable = new Set([1, 1, 2, 2, 3, 3]);
// for (const value of iterable) {
//   console.log(value);
// }



// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr){
//   // console.log(num);
// }

// const Sentens = "Hello world"
// for (const word of Sentens){
//   console.log(`Each word is ${word}`)
// }

// Maps

// maps is unique value pairs
// it is iterable
// it is used to store key-value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America") 
map.set('Fr', "France")
map.set('IN', "India") // not entry because key 'IN' already exists // only unique keys are allowed 
// output 
console.log(map); 
// Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }



// for (const Key of map){
//   console.log(Key);
// }
// output
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


for (const [Key, value] of map){ // [Key, value] is array destructuring // it is used to unpack values from arrays
  console.log(Key, ":-", value);
}
// output
// IN :- India
// USA :- United States of America
// Fr :- France


// object ===========

// ===================================================================

//  for...in LoopThe for...in loop iterates over the enumerable properties (keys) of an object. It’s primarily designed for objects but can be used with arrays (though not recommended).

// Syntax:javascript

// for (let key in object) {
//   // Code to execute
// }

// Example (Object):javascript

// const person = { name: "Alice", age: 25, city: "New York" };
// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// Output:
// name: Alice
// age: 25
// city: New York

// Example (Array):javascript

// const arr = ["Apple", "Banana"];
// for (let key in arr) {
//   console.log(`${key}: ${arr[key]}`);
// }
// Output:
// 0: Apple
// 1: Banana

// Note: Avoid for...in for arrays, as it may include non-index properties and inherited properties. Use for...of or forEach instead.

// Use Case:Iterating over object properties (e.g., inspecting key-value pairs).


// ===================================================================

// const myObject = {// myObject is not iterable
//   game1: 'NFS',
//   game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { // not working
//     console.log(key, ':-', value);
// } 



// for in 

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
};

for (const key in myObject) {
  console.log(`${key} shortcutis for ${myObject[key]}`);
}


// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
//   }


// forEach

//====================================================================
// forEach LoopThe forEach method iterates over arrays, executing a callback function for each element. It’s not a traditional loop but a higher-order function.

// Syntax:javascript

// array.forEach((element, index, array) => {
//   // Code to execute
// });

// Example:javascript

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

// Output:
// 0: Apple
// 1: Banana
// 2: Orange

// Explanation: forEach calls the callback for each array element, passing the element, index, and the array itself.

// Note:forEach cannot be stopped early (use break or return doesn’t work). Use for or for...of if you need control flow.

// Works only with arrays, not objects directly.

// With Objects (using Object.keys):javascript

// const person = { name: "Alice", age: 25 };
// Object.keys(person).forEach(key => {
//   console.log(`${key}: ${person[key]}`);
// });

// Output:
// name: Alice
// age: 25

//====================================================================


// const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (valu){ // valu is callback
//   console.log(valu);
// })

// coding.forEach( (item) =>{
//   console.log(item);
// })

// function printMe(item){
//   console.log(item);
// }
// coding.forEach(printMe)// reference


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// output 


// const myCoding = [
//   {
//       languageName: "javascript",
//       languageFileName: "js"
//   },
//   {
//       languageName: "java",
//       languageFileName: "java"
//   },
//   {
//       languageName: "python",
//       languageFileName: "py"
//   },
// ]

// myCoding.forEach( (item) =>{
//   console.log(item.languageFileName);
// })


//============================
// forEach LoopThe forEach method iterates over arrays, executing a callback function for each element. It’s not a traditional loop but a higher-order function.Syntax:javascript

// array.forEach((element, index, array) => {
//   // Code to execute
// });

// Example:javascript

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });
// Output:
// 0: Apple
// 1: Banana
// 2: Orange

// Explanation: forEach calls the callback for each array element, passing the element, index, and the array itself.

// Note:forEach cannot be stopped early (use break or return doesn’t work). Use for or for...of if you need control flow.
// Works only with arrays, not objects directly.

// With Objects (using Object.keys):javascript

// const person = { name: "Alice", age: 25 };
// Object.keys(person).forEach(key => {
//   console.log(`${key}: ${person[key]}`);
// });
// Output:
// name: Alice
// age: 25


//===============================
// forEach not retiurn any valy

//const coding = ["js", "ruby", "java", "python", "cpp", "R", ".C"]


// const value = coding.forEach( (item) =>{
//      console.log(item);
//      return item
// })
// console.log(value); 