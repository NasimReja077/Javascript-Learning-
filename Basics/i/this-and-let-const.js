// let, const (ES6)
/**
 * Earlier before 2015, JS has only Global Scope and Function Scope
 * ES6 introduced two important new JavaScript keywords: let and const.
 * These two keywords provide Block Scope in JavaScript.
 * 
 * Variables declared inside a { } block cannot be accessed from outside the block:
 */

// No block scope
{
    var x = 2;
}
// x can be accessed here

{
    let x = 2;
}
// x can NOT be used here


/**
 * Other points
 */

// 1. Variables defined with let cannot be Redeclared.

// ---> with var
var x = 10; // Here x is 10
{
var x = 2;  // Here x is 2
}
// Here x is 2


// ---> with let
let x = 10; // Here x is 10
{
let x = 2;  // Here x is 2
console.log(x); // 2
}
// Here x is 10




// 2. Variables defined with let must be Declared before use. No variable Hoisting
carName = "Saab";
let carName = "Volvo";

// will throw 'ReferenceError'



// --------------------------------------------------------------------



/**
 * 'this' keyword - 
 * In JavaScript, the this keyword refers to an object.
 * Which object depends on how this is being invoked (used or called)
 */

 const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
person.fullName();   // Output - John Doe


// The this keyword refers to different objects depending on how it is used
// 'this' can be binded to different object using - call(), apply(), and bind() methods
// We will see it in next video - Intermediate Js topics
