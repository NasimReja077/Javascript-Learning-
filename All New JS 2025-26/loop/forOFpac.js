// for of Loop in JavaScript
// Basic Example: Array Iteration
const number = [1,2,3,4,5];
for(let num of number){
     console.log(num);
}

// String Iteration
const str = "Nasim";
for(let word of str){
     console.log(word);
}

// Set Iteration
const mySet = new Set([1,2,2,3]);
for (let value of mySet){
     console.log(value);
};


// Map Iteration
const myMap = new Map([
     ["a", 1],
     ["b", 2],
     ["c", 3],
     ["d", 4],
     ["e", 5]
]);

for (let [key, value] of myMap){
     console.log(`${key}:${value}`);
}


// Using break
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  if (num === 4) break;
  console.log(num);
}


// Async Iteration
async function processItems(items){
     for (let item of items){
          await new Promise(resolve => setTimeout(resolve, 1000));
          // console.log("Async Iteration", item);
     }
}

processItems([1,2,3,4,5]); // logs 1,2,3 se


// Sparse Arrays
const sparse = [1, , 3];
for (let value of sparse) {
  console.log(value);
}
// Output:
// 1
// undefined
// 3
// Note: Sparse slots return undefined, unlike for...in which skips them


// Sum Array Elements:
// Use for...of to calculate the sum of all numbers in the array [10, 20, 30, 40].
const numbero = [10,5,20,6,7,15];
let sum = 0;
for (let num of numbero){
     sum += num;
}
console.log(sum);

// Reverse a String:
// Use for...of to reverse the characters of the string 'hello' and store them in a new string.

const str1 = "HELLO";
let reverse = ""; //  declares a variable named reverse and initializes it as an empty string. This variable will store the reversed string as the loop progresses.
for (let char of str1){
     reverse = char + reverse;
} // This is the core of the string reversal logic. In each loop iteration, it takes the current character (char) and prepends it to the existing reverse string.
console.log(reverse); //


const numbers2 = [1,2,4,5,6,7];
const evens = []; // empty array 
for (let num3 of numbers2){
     if(num3 % 2 === 0) {
          evens.push(num3); // use push for move array in empty array for file
          // If the condition in the if statement is true (the number is even), this line adds (pushes) the current even number (num3) to the end of the evens array.
     }
}
console.log(evens);

// Log Unique Values from a Set:
// Use for...of to log all unique values from the Set new Set(['a', 'b', 'a', 'c']).javascript

const mySet5 = new Set(['a', 'b', 'a', 'c']);
for (let value of mySet5) {
  console.log(value);
}
// Expected Output:
// a
// b
// c


// Count Vowels in a String:
// Use for...of to count the number of vowels (a, e, i, o, u) in the string 'javascript'.

const str6 = "MyNameIsNasim";
let vowCount = 0;
const vowels = new Set(["a","e","i","o","u"]);
for(let chars of str6){
     if(vowels.has(chars)){ // In JavaScript, the has() method is used to check for the existence of an element or property within various data structures.
          vowCount++;
     }
}
console.log("Counted Vowels is", vowCount);


// Process Map Entries:
// Use for...of to create an array of key-value strings from a Map new Map([['a', 1], ['b', 2]]) (e.g., ['a: 1', 'b: 2']).

const myMap1 = new Map([["a",1],["b",2]]);
const result = [];
for(let [key, value] of myMap){
     result.push(`${key}: ${value}`);
}
console.log(result);

