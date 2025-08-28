/**
 * 'new' keyword - The new keyword is used to create an instance of a 
 * user-defined object type and a constructor function.
 * 
 * Syntax - new constructor(arguments[])
 */

// Example
const date = new Date();  // Current date
const isTrue = new Boolean(); // false


// Custom function
function message(name) {
    this.greeting = "Hey " + name;
}

var todayGreeting = new message('Baby girl');

console.log(todayGreeting);
