// ForEach Practical
// Syntax
// Array.forEach(callback(currentValue[, index[, Array]])[, thisArg])

const num = [1,2,3,4,5];
num.forEach(num => console.log(num));
//output:- 
/**
1
2
3
4
5
 */

// Using Index and Array
const fruits = ["Apple", "Banana", "Orange", "POP"];
fruits.forEach((fruits, index, array) =>{
     console.log(`Index ${index}: ${fruits}, Array: ${array}`);
});

/**
Index 0: Apple, Array: Apple,Banana,Orange,POP 
Index 1: Banana, Array: Apple,Banana,Orange,POP
Index 2: Orange, Array: Apple,Banana,Orange,POP
Index 3: POP, Array: Apple,Banana,Orange,POP
 */

// Using thisArg

const obj ={
     multiplier: 2,
     multiply: function(num){
          console.log(num * this.multiplier);
     }
};

// const numbers = [1,2,3,5];
// numbers.forEach(obj.multiply, obj);
// output: 
// 2
// 4
// 6
// 10


// Modifying Array Elements (if mutable)

const number = [2,3,5];
number.forEach((num, index, array) =>{
     array[index] = num*2
})
console.log(number); // [ 4, 6, 10 ]


// Working with Objects in an Array

const users = [
     {
          name: 'Alice', 
          age: 25
     },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

users.forEach(users =>{
     console.log(`${users.name} is ${users.age} Years old`)
});
// Alice is 25 Years old
// Bob is 30 Years old
// Charlie is 35 Years old


// Limitations: No Breaking
const number1 = [1, 2, 3, 4, 5];
// This won't stop the loop
number1.forEach(num => {
  if (num === 3) return; // Only skips the current iteration
//   console.log(num);
});
// Output: 1, 2, 4, 5


// Write a forEach loop to print the square of each number in the array [1, 2, 3, 4, 5].

// const number2 = [1,5];
// number2.forEach(num => console.log(num * num));

// Use forEach to calculate the sum of all numbers in an array [10, 20, 30, 40].

let sum = 0;
const number3 = [10, 50, 30, 40, 20];
number3.forEach(num => sum += num);
console.log(sum); // 150


// Given an array of objects [{ id: 1, active: false }, { id: 2, active: false }], use forEach to set active: true for all objects.

const items = [
     {
          id: 1, 
          active: false 
     }, 
     { 
          id: 2, 
          active: false 
     }
];

items.forEach(items => items.active = true);
console.log(items)


// Use forEach to concatenate all strings in an array ['a', 'b', 'c'] into a single string.

let result = "";
const letters = ["a", "b", "c"];
letters.forEach(letter => result += letter);
console.log(result);


// Use forEach to log only even numbers from the array [1, 2, 3, 4, 5, 6].

const num3 = [1, 2, 3, 4, 5, 6];
num3.forEach(number2 =>{
     if(number2 % 2 === 0) console.log(number2);
});


// What is the difference between forEach and map?

const arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6, returns undefined
const newArr = arr.map(num => num * 2); // Returns: [2, 4, 6]


// const arr2 = [1, 2, 3];
// arr2.forEach((num, index , array) ={
//      array.push(4);
     // console.log(num);
// });


// const obj = { factor: 10 };
// const number4 = [1, 3, 5];
// number4.forEach(function(num){
//      // console.log(num * this.factor);
// }, obj);


// Capitalizing Strings:
// Given an array of strings ['hello', 'world', 'javascript'], use forEach to capitalize the first letter of each string and store the results in a new array.


const worlds = ['hello', 'world', 'javascript'];
const capitalized = [];
worlds.forEach(words => {
     capitalized.push(words.charAt(0).toUpperCase() + words.slice(1));
});
// console.log(capitalized);


const numbers = [1, 3, 2, 3, 4, 3, 5];
let count = 0;
numbers.forEach(num => {
  if (num === 3) count++;
});
// console.log(count); // Expected Output: 3

const letters5 = ['a', 'b', 'c'];
const indexMap = {};
letters.forEach((letters5, index) => {
  indexMap[index] = letters5;
});
console.log(indexMap); // Expected Output: { '0': 'a', '1': 'b', '2': 'c' }

// https://www.tutorjoes.in/JS_tutorial/practical_questions_answers_for_foreach_in_javascript 