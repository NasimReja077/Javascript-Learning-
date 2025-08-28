// forEach
// Array.forEach(callBackFunction)
// callBackFunction is a function that is called for each element in the array . callBackFunction will receive the current element as an argument.

// The forEach method does not return a new array.

// A call Back is a function as an argument to another function. it allows for more flexible and reusable code.

// forEach is use to iterate over array elements
// forEach hase three parameters: currentValue, index, and array
// forEach is higher order function or method
// higher order function is a function that takes another function as an argument or returns a function as a result
// higher order function use another function or return a function
// forEach is use to iterate over array elements
// Example
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num);
// });

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val)=>{
//      console.log(val);
// })

// let arr = ["Nasim", "Reja", "Mondal"];
// arr.forEach((val)=>{
//      console.log(val.toUpperCase());
// })


// let arr = ["Nasim", "Reja", "Mondal"];
// arr.forEach((val, idx, arr)=>{
//      console.log(val.toUpperCase(), idx, arr);
// });


// let nums = [1, 2, 3, 4, 5];
// let calSquare = (num) =>{
//      console.log(num * num); // num is callback function parameter
// }
// nums.forEach(calSquare); // forEach is higher order function


// Array Methods
// Array Methods it is used to perform operations on arrays, 
// Array.map() is used to create a new array by applying a function to each element of the original array.
// map is very similar to forEach, but it returns a new array.

// let nums = [1, 2, 3, 4, 5];
// let NewArr = nums.map((val) => {
//      return val * 2;
// });
// console.log(NewArr);


// Filter method
// Array.filter() is used to create a new array with all elements that pass the test implemented by the provided function.
// filter is very similar to map, but it returns a new array with only the elements that pass the test.

// let newArr = arr.filter((val) => {
//      return val % 2 === 0;
// });

// let arr = [3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val) => {
//      return val % 2 === 0;
// });
// console.log(evenArr); // [2, 4, 6, 8, 10]

// let nums = [1, 2, 3, 4, 5];
// let filteredArr = nums.filter((val) => {
//      return val > 2;
// });
// console.log(filteredArr);

// Array Reduce
// Array.reduce() is used to reduce the array to a single value by applying a function to each element.
// The reduce method takes two arguments: a callback function and an initial value.
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.
// The accumulator is the value returned by the last execution of the callback function.
// The currentValue is the current element being processed in the array.
// The currentIndex is the index of the current element being processed in the array.
// The array is the original array upon which reduce was called.


// Find the sum of all elements in an array
// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((accumulator, currentValue) => {
//      return accumulator + currentValue;
// }, 0);
// console.log(sum);


// // Find the maximum value in an array
// let arr = [1, 2, 10, 4, 5];
// const output = arr.reduce((prev, curr) =>{
//      return prev > curr ? prev : curr;
// });
// console.log(output); // 10


// // Create an array of numbers from 1 to n 
// let n = prompt("Enter a number = ");
// let arr = [];
// for ( let i = 1; i<=n; i++){
//      arr[i-1] = i;
// }
// console.log(arr);
// // Find the sum of all elements in an array
// let sum = arr.reduce((res, curr) =>{
//      return res + curr;
// });
// console.log("sum =", sum);

// // Find the factorial of all elements in an array
// let factorial = arr.reduce((res, curr) =>{
//      return res * curr;
// });
// console.log("factorial =", factorial);

