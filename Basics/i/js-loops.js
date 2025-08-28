/**
 * Loops - Many types and are used to iterate on properties and do meaningful
 * actions. 
 */

// 1. For loop - loops through a block of code a number of times
for (let i = 0; i < 5; i++) {
    console.log(i);
} // Output - 0,1,2,3,4


// 2. For...in loop - loops through the properties of an object
const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
  console.log(x); // Output - fname, lname, age
}


// 3. For...of loop (ES6) - loops through the values of an iterable object
const person = {fname:"John", lname:"Doe", age:25};

for (let x of person) {
  console.log(x); // Output - John, Doe, 25
}


// 4. While loop - loops through a block of code while a specified condition is true
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
} // Output - 0,1,2,3,4


// 5. Do-while loop - also loops through a block of code while a specified condition is true
let i = 0;
do {
    console.log(i);
    i++;
} while(i < 5) // Output - 0,1,2,3,4