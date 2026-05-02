// Two Pointer Technique on 2D Arrayjavascript

function search2D(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  
  let row = 0;
  let col = matrix[0].length - 1;  // Start from top-right corner
  
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;        // move left
    } else {
      row++;        // move down
    }
  }
  return false;
}

// Test
const matrix = [
  [1,  4,  7],
  [2,  5,  8],
  [3,  6,  9]
];

console.log(search2D(matrix, 5)); // true
console.log(search2D(matrix, 10)); // false
