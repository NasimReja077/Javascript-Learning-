/**
 * Variable hosting - In Javascript, a variable can be used before 
 * it has been declared.
 */

// ---> program
x = 5; // Assign 5 to x
console.log(x);      // Display x in the element
var x; // Declare x



// ---> get converted into
var x; // Declare x
x = 5; // Assign 5 to x

console.log(x);


// Edge Case - Only declerations are hoisted, initializations are not hoisted
var x = 5; // Initialize x
console.log(x + " " + y);           // Output -> 5 undefined
var y = 7; // Initialize y


// ---> will get converted into
var x = 5; // Initialize x
var y; // Declare y
console.log(x + " " + y);           // Output -> 5 undefined
y = 7; // Initialize y