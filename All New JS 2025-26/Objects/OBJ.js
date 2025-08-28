// object declaration two ways 1> singleton 2> object literal

// singleton is a design pattern that restricts the instantiation of a class to a single instance
// object creation
// it is used to control access to shared resources, such as database connections or file handles
// example: const instance = new Singleton(); // only one instance can be created

// object literal is a comma-separated list of name-value pairs wrapped in curly braces
// it is used to create objects in a more concise way
// example: const obj = { name: "John", age: 30 }; // creates an object with two properties

// object literal

// declare a symbol
const mySym = Symbol("key1"); 

const jsUser = {
     name: "Nasim",
     "full Name": "Nasim Reja", // not posibal use dot notation
     // mySym: "myKey1",  // type of string
     [mySym]: "myKey1", // type of string
     age: 25,
     location: "India",
     email: "nasim@example.com",
     isLoggedIn: true,
     lastLogIn: ["Monday", "Saturday"]
}
// not good way to access object properties
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]); // use bracket notation
// console.log(typeof jsUser.mySym); // use dot notation

console.log(jsUser[mySym]); // use bracket notation

jsUser.email = "nasim.reja@gogle.com";
// Object.freeze(jsUser);
jsUser.email = "nasim.reja@example.com";
// console.log(jsUser);

jsUser.greeting = function(){
     console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
     console.log(`Hello JS User, ${this.name}`); // this refers to the current object
}
console.log(jsUser.greeting()); // undefined
console.log(jsUser.greeting); //[Function (anonymous)] // function not execute invoked but function reference
console.log(jsUser.greetingTwo()); // Hello JS User, Nasim

// ============================================================================

