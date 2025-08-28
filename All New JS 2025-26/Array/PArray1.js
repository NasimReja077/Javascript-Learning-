// Array is object as arrays in other programming languages, Enable storing a collection of multiple items under a single variable name,and has members for performing operations on the collection
// js arrays are re-sizable and contain a mix of different data types
// it is a collection of elements
// array element are indexed 
// js array-copy creat shall copies all elements from one array to another
// shallow copy is a bit-by-bit copy of the original array
// shallow copy was created using the slice() method
// Deep copy is a copy of an array and all of the elements are copied
// Deep copy can be created using the JSON.parse() and JSON.stringify() methods

// const myArr = [1, 2, 3, 4, 5, true, "hello"];
const myArr = [1, 2, 3, 4, 5];
// const myHeors = ["Iron Man", "Spider-Man", "Captain America", "Thor", "Hulk"];
// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[1]);
// console.log(myArr);
// console.log(myHeors);
// console.log(myArr2);

// // Array methods
// myArr.push(6); // adds a new element to the end of an array
// myArr.pop(); // removes the last element from an array
// myArr.shift(); // removes the first element from an array
// myArr.unshift(10); // adds a new element to the beginning of an array

// console.log(myArr.includes(3)); // includes is used to check if an array contains a certain element  // returns true
// console.log(myArr.indexOf(6)); // indexOf is used to find the index of a certain element  // returns 5
// console.log(myArr.length); // length is used to find the length of an array  // returns 5
// console.log(myArr.reverse()); // reverse is used to reverse the order of an array
// console.log(myArr.sort()); // sort is used to sort the elements of an array
// console.log(myArr.slice(1, 4)); // slice is used to create a shallow copy of a portion of an array into a new array object
// console.log(myArr.splice(1, 2)); // splice is used to add or remove elements from an array


// const newArr =  myArr.join(); // join is used to join all elements of an array into a string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // using join creates a string

// slice, splice
// const myArr3 = [1, 2, 3, 4, 5];
// console.log("A", myArr3);
// const mynum1 = myArr3.slice(1, 3);
// console.log(mynum1);
// console.log("B", myArr3);

// const mynum2 = myArr3.splice(1, 3);
// console.log("C", myArr3); // 1, 5 because splice modifies the original array
// console.log(mynum2); // 2, 3, 4


// console.log(myArr3.slice(1, 4)); // returns [2, 3, 4]
// console.log(myArr3.splice(1, 2)); // returns [2, 3]
// console.log(myArr3); // returns [1, 4, 5]


const marvel_heros = ["thor", "loki", "captain marvel"]
const dc_heros = ["superman", "batman", "wonder woman"]

// marvel_heros.push(dc_heros) // adds the entire dc_heros array as a single element to the end of the marvel_heros array // output: ["thor", "loki", "captain marvel", ["superman", "batman", "wonder woman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // batman

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // ["thor", "loki", "captain marvel", "superman", "batman", "wonder woman"]

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros); // ["thor", "loki", "captain marvel", "superman", "batman", "wonder woman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray(marvel_heros)); // true
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
// from is used to create a new array from an array-like or iterable object
console.log(Array.from({name: "Hetas"})); // [undefined] // {} is object // [] 
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]

let scores1 = 100
let scores2 = 350
let scores3 = 400

console.log(Array.of(scores1, scores2, scores3)); // [100, 350, 400]


// loop in array

let heroes = ["thor", "loki", "captain marvel", "iron man", "spider man"]
for (let i = 0; i<heroes.length; i++){
    console.log(heroes[i]);
}

// for of
for (let hero of heroes){
     console.log(hero);
}

let merks = [80, 90, 100, 39, 75, 65]
let sum = 0;
for (let val of merks){
     sum += val;
}
let avg = sum / merks.length;
console.log(`avg marks of the class = ${avg}`);


let items = [1, 2, 3, 4, 5];
let i = 0;
for (let val of items){
     console.log(`value at index ${i} = ${val}`);
     let offer = val / 10;
     items[i] = items[i] - offer;
     console.log(`value after discount at index ${i} = ${items[i]}`);
     i++;
}

for (let i = 0; i< items.length; i++){
     let offer = items[i] / 10;
     items[i] -= offer;
}
console.log(items);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(2, 0, 101);

// Add Element
arr.splice(2, 0, 101);

// Delete Element
arr.splice(3, 1);

// Replace Element
arr.splice(3, 1, 101);

// in splice if not mention number of elements to remove, it will remove 1 element by default
arr.splice(4); // removes all elements from index 4 to end of array
// console.log(arr);

// Array of Companies
let companies = ["TCS", "Infosys", "Wipro", "Cognizant", "IBM"]

// console.log(companies.shift());
//  output: TCS
// console.log(companies);
//  output: ["Infosys", "Wipro", "Cognizant", "IBM"]

console.log(companies.splice(2, 1, "Ola"));
// output: ["Wipro"]
console.log(companies);
// output: ["TCS", "Infosys", "Ola", "Cognizant", "IBM"]

console.log(companies.push("Amazon"));
// output: 6
console.log(companies);
// output: ["TCS", "Infosys", "Ola", "Cognizant", "IBM", "Amazon"]
