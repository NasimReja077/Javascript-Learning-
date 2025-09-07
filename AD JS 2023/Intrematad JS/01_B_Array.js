const myArr = [0,1,5,3,4,5]
// const myArr = ["Herow1","Herow2"]
// console.log(myArr[2])

// // Deep copy
// Shope copy


/*JavaScript array is an object that represents a collection of similar type of elements.
There are 3 ways to construct array in JavaScript
By array literal
By creating instance of Array directly (using new keyword)
By using an Array constructor (using new keyword)*/

// Array methods



// const myArr = [0,1,5,3,4,5]
// console.log(myArr)
// myArr.push(6) 
 // The push() method adds a new element to an array (at the end): // The push() method returns the new array length:
// myArr.push(70)
// myArr.pop() // -1
// myArr.pop() 
 // The pop() method removes the last element from an array: // The pop() method returns the value that was "popped out":
// myArr.pop()
// console.log(myArr) 

/* ^ -push o/p is [
  0, 1, 5, 3,
  4, 5, 6
]*/


// myArr.unshift(9)
// console.log(myArr) // 9 plase one 0 // The unshift() method adds new elements to the beginning of an array

// myArr.shift() // -1st // The shift() method returns the value that was "shifted out":
// myArr.shift()
// console.log(myArr)

// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat')); // true

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Banana", 3))  // false

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate. 

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// // The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// // Start from index 2
// console.log(beasts.indexOf('bison', 2));
// console.log(beasts.indexOf('giraffe'));



const newArr = myArr.join()
//console.log(myArr);
//console.log( newArr); // convated in new string in .typeof

//.join() -> The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];
//console.log(elements.join());
// Expected output: "Fire,Air,Water"
//console.log(elements.join(''));
// Expected output: "FireAirWater"
//console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
//console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

//The slice()-> method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// The splice() -> method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] their is 4 aliement
// console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros)
console.log(marvel_heros)
//The concat()-> method of String values concatenates the string arguments to this string and returns a new string.
const allHerows = marvel_heros.concat(dc_heros)
console.log(allHerows);


const all_new_heros = [...marvel_heros, ...dc_heros]  // ... is sparate
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator