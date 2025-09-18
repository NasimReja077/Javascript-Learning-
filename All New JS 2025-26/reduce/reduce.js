// How reduce Executes
const number = [1, 2, 3, 4];
const sumNum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is the initial value // 0 is start value ,if you don't provide it, the first element of the array will be used as the initial value
console.log(sumNum); // 10
/**
 * Step-by-Step Execution:Initial Call: accumulator = 0 (initialValue), currentValue = 1. Callback returns 0 + 1 = 1.
Second Call: accumulator = 1 (from previous), currentValue = 2. Callback returns 1 + 2 = 3.
Third Call: accumulator = 3, currentValue = 3. Callback returns 3 + 3 = 6.
Fourth Call: accumulator = 6, currentValue = 4. Callback returns 6 + 4 = 10.
Final Result: reduce returns 10.
 */


// If no initialValue is provided:
const sumNumNoInitial = number.reduce((accumulator, currentValue) => accumulator + currentValue); // here is 0 is use as initial value
console.log(sumNumNoInitial); // 10

/**
 * Initial Call: accumulator = 1 (first element), currentValue = 2. Callback returns 1 + 2 = 3.
Second Call: accumulator = 3, currentValue = 3. Callback returns 3 + 3 = 6.
Third Call: accumulator = 6, currentValue = 4. Callback returns 6 + 4 = 10.
Final Result: 10.
 */

// Flattening an Array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []); // [] is start value // start value is empty array
console.log(flatArray); 


// Grouping Objects by Property


const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
const groupingByAge = people.reduce((accumulator, currentValue) => {
     accumulator[currentValue.age] = accumulator[currentValue.age] || [];
     accumulator[currentValue.age].push(currentValue.name);
     return accumulator;
}, {});
console.log(groupingByAge);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
     accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
     return accumulator;
}, {});
console.log(fruitCount);

// Reverse an Array
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reduce((accumulator, currentValue) => [currentValue, ...accumulator], []);  // ...accumulator is used to spread the existing elements of the accumulator array into the new array being created. // [] is start value
console.log(reversedArray); // [5, 4, 3, 2, 1]

// Finding Maximum Value
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]); // numbers[0] is start value
console.log(maxNumber); // 9

