/**Recursion in JavaScript is a technique where a function calls itself to solve a problem by breaking it into smaller, similar subproblems. Here’s a concise overview with examples:Key Concepts
 * Base Case: The condition that stops the recursion to prevent infinite loops.
 * Recursive Case: The part where the function calls itself with modified inputs to progress toward the base case.
 * Call Stack: Each recursive call adds a frame to the stack, which can lead to stack overflow if recursion is too deep.
 */

// function recurssive(){
//      console.log("This is recursive a funtion")
//      recurssive()
// }
// recurssive()



// function recursiveFunction(parameter) {
//   // Base case
//   if (condition) {
//     return value;
//   }
//   // Recursive case
//   return recursiveFunction(modifiedParameter);
// }


// function coding(num){
//      // Base case
//      if(num === 0){
//           console.log("Coding All done!")
//           return
//      }else{
//           console.log("I am doing coding, i am going to next")
//           coding(num - 1) // < function call it self //Recursive case
//      }
// }
// coding(5)

// Factorial
// Calculates the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1).

function factorial(n){
      // Base case: if n is 0 or 1, return 1
     if(n === 0 || n === 1){
          return 1;
     }
     // let fact = n*factorial(n-1)
     // return fact;
      // Recursive case: n * factorial of (n-1)
     return n * factorial(n-1);
}
console.log(factorial(5));


//  Fibonacci Sequence
// Generates the nth Fibonacci number (e.g., Fibonacci(5) = 5, sequence: 0, 1, 1, 2, 3, 5, ...).

function fibonacci(n){
     if (n === 0) return 0;
     if (n === 1) return 1;
     return fibonacci(n-1) + fibonacci(n-2);
}

console.log("Fibonacci Sequence", fibonacci(6)); // Output: 8

// Array Sum
// Calculates the sum of all elements in an array.

function sumArray(arr, index = 0) {
  // Base case: if index reaches array length, return 0
  if (index >= arr.length) return 0;
  // Recursive case: current element + sum of rest
  return arr[index] + sumArray(arr, index + 1);
}

console.log("Array Sum", sumArray([1, 2, 3, 4])); // Output: 10
// Take the current element (arr[index])
// 👉 Add it to the sum of the remaining elements (sumArray(arr, index + 1))

// Example Walkthrough for [1, 2, 3, 4]

// sumArray([1,2,3,4], 0)
// → 1 + sumArray([1,2,3,4], 1)

// sumArray([1,2,3,4], 1)
// → 2 + sumArray([1,2,3,4], 2)

// sumArray([1,2,3,4], 2)
// → 3 + sumArray([1,2,3,4], 3)

// sumArray([1,2,3,4], 3)
// → 4 + sumArray([1,2,3,4], 4)

// sumArray([1,2,3,4], 4)
// → Base case → returns 0

// Now adding backwards:
// 4 + 0 = 4
// 3 + 4 = 7
// 2 + 7 = 9
// 1 + 9 = 10 ✅


