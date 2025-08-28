// > A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.
// > JavaScript is an object-based language. Everything is an object in JavaScript.
// > JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.


// There are 3 ways to create objects.
  // By object literal
  // By creating instance of Object directly (using new keyword)
  // By using an object constructor (using new keyword)

// singleton -> https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern

// Object.create
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

// object literals

const mySym = Symbol("key1") // Symbol syntax
const JsUser = {
     name: "Nasim",
     "full name": "Nasim Reja",
     [mySym]: "mykey1",  // [] part of sentax in Symbol // when you not using [] this then youer valu is store in string .
     age: 20,
     location: "kolkata",
     email: "Namio@google.com",
     isLoggedIn: false,
     lastLoginDays: ["Monday", "Saturday"]
 }
//  console.log(JsUser.email); // note a right process
//  console.log(JsUser["email"]);
// console.log(JsUser["full name"]) //console.log(JsUser.full name) {we are note using this besc "full name" ths is string }
console.log(JsUser[mySym]) // this is also use []


JsUser.email = "Namio@chatgpt.com"
// Object.freeze(JsUser) 
// The Object.freeze()-> static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
} 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());