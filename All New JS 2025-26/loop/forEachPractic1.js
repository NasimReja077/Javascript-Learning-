// ForEach Practical
// Syntax
// Array.forEach(callback(currentValue[, index[, Array]])[, thisArg])

const num = [1,2,3,4,5];
num.forEach(num => console.log(num));
//output:- 
/**
1
2
3
4
5
 */

// Using Index and Array
const fruits = ["Apple", "Banana", "Orange", "POP"];
fruits.forEach((fruits, index, array) =>{
     console.log(`Index ${index}: ${fruits}, Array: ${array}`);
});

/**
Index 0: Apple, Array: Apple,Banana,Orange,POP 
Index 1: Banana, Array: Apple,Banana,Orange,POP
Index 2: Orange, Array: Apple,Banana,Orange,POP
Index 3: POP, Array: Apple,Banana,Orange,POP
 */

// Using thisArg

const obj ={
     multiplier: 2,
     multiply: function(num){
          console.log(num * this.multiplier);
     }
};

const numbers = [1,2,3,5];
numbers.forEach(obj.multiply, obj);
// output: 
// 2
// 4
// 6
// 10


// Modifying Array Elements (if mutable)

const number = [2,3,5];
number.forEach((num, index, array) =>{
     array[index] = num*2
})
console.log(number); // [ 4, 6, 10 ]


// Working with Objects in an Array

const users = [
     {
          name: 'Alice', 
          age: 25
     },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

users.forEach(users =>{
     console.log(`${users.name} is ${users.age} Years old`)
});
// Alice is 25 Years old
// Bob is 30 Years old
// Charlie is 35 Years old


// Limitations: No Breaking
const number1 = [1, 2, 3, 4, 5];
// This won't stop the loop
number1.forEach(num => {
  if (num === 3) return; // Only skips the current iteration
  console.log(num);
});
// Output: 1, 2, 4, 5


