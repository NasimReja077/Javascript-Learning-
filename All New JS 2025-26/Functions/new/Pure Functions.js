// Pure Functions in JavaScript
// A Pure Function is a function that:
// Always returns the same output for the same input.
// Does not modify or depend on anything outside the function (no side effects).
// Example of a Pure Function


function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// ✅ Same inputs → Same output

// ✅ No external variables modified


// Why is it Pure?

function square(n) {
  return n * n;
}
square(4); // 16
square(4); // 16
square(4); // 16

// Every time you pass 4, you get 16.


// Impure Function 
// Example of an Impure Function

let count = 0;

function increment() {
  count++;
  return count;
}

Output:

increment(); // 1
increment(); // 2
increment(); // 3

// ❌ Same call, different result

// ❌ Modifies external variable (count)

// This is an Impure Function.

// Another Impure Function
let tax = 10;

function getPrice(price) {
  return price + tax;
}

// If tax changes:

tax = 20;
getPrice(100); // 120

// ❌ Output depends on external state.

// Pure Function with Array
// Impure
let arr = [1, 2, 3];

function addItem(item) {
  arr.push(item);
}

// ❌ Modifies external array.

function addItem(arr, item) {
  return [...arr, item];
}

const result = addItem([1, 2, 3], 4);

console.log(result);

// ✅ Returns a new array

// ✅ Does not change original array


// Real React Example
function calculateTotal(price, quantity) {
  return price * quantity;
}
calculateTotal(100, 2); // 200
calculateTotal(100, 2); // 200

// Pure functions are commonly used for:

// Redux reducers
// Utility functions
// Data transformations