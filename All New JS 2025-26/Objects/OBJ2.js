// Object singleton

// const tinderUser = new Object(); // singleton instance
// const tinderUser = {};
// console.log(tinderUser); // output: {}

const tinderUser = {};

tinderUser.id = 101;
tinderUser.name = "Sakib";
tinderUser.age = 30;
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 


const regularUser = {
     email: "regular@example.com",
     fullName: {
          userFullName:{
               firstname: "Nasim",
               lastname: "Reja"
          }
     }
}

console.log(regularUser.fullName.userFullName.firstname); // output: Nasim // nested Object

// object merge {key, value}

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = Object.assign({}, obj1, obj2, obj4); // merge 2 objects // assign is shallow copy // {} is use for merge optional
// {} is terget and outher is sorch 

// const obj3 = {obj1,obj2}; // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = {...obj1, ...obj2, ...obj4}; // spread operator // merge 2 objects // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } // best choice
// console.log(obj3); // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// array of objects
const users = [
     { 
          id: 1, 
          name: "Alice", 
          age: 25 
     },
     { 
          id: 2, 
          name: "Bob", 
          age: 30 
     },
     { 
          id: 3, 
          name: "Charlie", 
          age: 35 
     }
];


users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // output: [ 'id', 'name', 'age', 'isLoggedIn' ] // return array of keys because it's an object
// keys is use for accessing object properties
// it returns an array of keys
// it can be useful for iterating over object properties
console.log(Object.values(tinderUser)); // output: [ 101, 'Sakib', 30, false ] 
console.log(Object.entries(tinderUser)); // output: [ [ 'id', 101 ], [ 'name', 'Sakib' ], [ 'age', 30 ], [ 'isLoggedIn', false ] ] // return array of arrays
// entries is use for accessing both keys and values
// it returns an array of arrays
// it can be useful for iterating over both keys and values
// it is use when you need to access both keys and values

console.log(tinderUser.hasOwnProperty("age")); // output: true // check if the object has the property
// hasOwnProperty is used to check if the object has the specified property as its own (not inherited) property
// it returns true if the property exists, otherwise false
// it can be useful for checking if a property is present in an object
// it is often used in conditional statements


// const mergedUser = {
//      ...regularUser,
//      age: 25
// }


// Object de-structure
// {} is important for destructuring
// it is used to extract values from objects and assign them to variables
// it was introduced in ES6
// it allows for more concise and readable code
// syntax: const { key1, key2 } = object;

const course = {
     courseName: "JavaScript",
     price: "1000",
     courseInstructor: "Nasim"
}
// course.courseInstructor
const {courseInstructor : instructor} = course; // 
// console.log(courseInstructor);
console.log(instructor); // output: Nasim


// it par of react 
// const navebar = ({ company }) =>{

// }
// navebar(company = "Naim")



// api 
// {
//      "course": "JavaScript", // key and value both are strings
//      "price": "1000",
//      "name": "Nasim"
// }

// array of objects
// [
//      {},
//      {},
//      {}
// ]



// const person = {
//   name: "Alice",
//   age: 25,
//   isStudent: true
// };

// delete person.isStudent; // Removes the isStudent property

// console.log(person); // Output: { name: "Alice", age: 25 }
// console.log(person.isStudent); // Output: undefined


// Nested Objects
const student = {
  name: "Bob",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Boston",
    zip: "02101"
  }
};
// Accessing Nested Object Properties
console.log(student.address.city);      // Output: "Boston"
console.log(student["address"]["city"]); // Output: "Boston"

// Modifying Nested Properties:
student.address.city = "New York"; // Update city
student.address.country = "USA";   // Add new property

console.log(student.address);
// Output: { street: "123 Main St", city: "New York", zip: "02101", country: "USA" }

// Deleting Nested Properties:
delete student.address.zip;

console.log(student.address);
// Output: { street: "123 Main St", city: "New York", country: "USA" }



// Dynamic Keys:You can use computed property names in object literals (ES6+).javascript

const key = "color";
const car = {
  brand: "Toyota",
  [key]: "Blue"
};
console.log(car.color); // Output: "Blue"

// Checking if a Property Exists:

// Use the in operator or hasOwnProperty():javascript

// console.log("name" in person);         // Output: true
// console.log(person.hasOwnProperty("name")); // Output: true


Iterating Over Properties:Use a for...in loop to iterate over an object’s keys:javascript

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25

// Common Use Cases:Objects are used to represent real-world entities (e.g., users, products, or configurations).
// Nested objects are common in APIs, JSON data, and complex applications.

// Summary
// Creating Objects: Use object literals ({}), new Object(), or Object.create().
// Accessing Properties: Use dot notation (obj.key) for known keys or bracket notation (obj["key"]) for dynamic or special keys.
// Deleting Properties: Use the delete operator to remove a key-value pair.
// Nested Objects: Objects can contain other objects, accessed or modified by chaining dot/bracket notation.





