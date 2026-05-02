// Basic 2D Array 

// Method 1: Using nested arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix);

// Method 2: Using Array.from() to create a 2D array 
// Create a 3x4 2D array filled with 0s
const rows = 3;
const cols = 4;

const arr = Array.from({ length: rows }, () => Array(cols).fill(0));

console.log(arr);
// Output:
// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]

// Method 3: Using a loop to create a 2D array

const rows = 2;
const cols = 5;

const array2D = [];
for (let i = 0; i < rows; i++){
     array2D[i] = new Array(cols).fill(0);
}
console.log(array2D);


// Create a 3x3 2D array filled with 0s
const rows = 3;
const cols = 3;

const matrix = new Array(rows);
for (let i = 0; i < rows; i++) {
  matrix[i] = new Array(cols).fill(0);
}

console.log(matrix);


