function sayMyName(){
     console.log("H");
     console.log("I");
     console.log("T");
     console.log("E");
     console.log("S");
     console.log("H");
 }
//  sayMyName()

// function addTwoNumber(number1,number2){
//      console.log(number1+number2);
// }

// const result = addTwoNumbers(3, 5)  // 8 and undefine becose 
// console.log("Result: ", result);

function addTwoNumbers(number1, number2){
     // let result = number1 + number2; 
     // return result
     return number1 + number2
}
// ^ tis is a call funtion
const result = addTwoNumbers(3, 5) // this is man fauntion
console.log("Result: ", result);


function loginUserMessage(username ="Namimio"){
     if(!username){
          console.log("please enter a username");
          return
     }
     return `${username} just logged in`
}
// loginUserMessage("hitesh") is not working // funtion is exgicut but value are not store 
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("")) // username is not defined // output just logged in 
// console.log(loginUserMessage()) // when no argument is passed then "undefined" just logged in

// ...num1 is rest operator and spread operator both 
// it allows us to handle multiple arguments as an array
// it was introduced in ES6
// it is used to pack and unpack values
// or to handle multiple arguments as an array

function calculateCartPrice(val1, val2, ...num1){//argument
     return num1 //val1 is integer
 }
//  console.log(calculateCartPrice(200, 400, 500, 2000))
// output [500, 2000] because val1 and val2 are not included in the rest parameter
// num1 is an array [500, 2000]
const user = {
     username: "hitesh",
     prices: 199
 }

 // $ is used to denote a template literal 
 // object destructuring
 function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 // handleObject(user)  // undefined when prices is not defined
 // handleObject(user) it is use object destructuring because it allows us to extract values from objects

handleObject({ // this object 
     username: "sam",
     price: 399
 })
 
 const myNewArray = [200, 400, 100, 600] // passing array
 
 function returnSecondValue(getArray){
     return getArray[1] // getArray is use because it is the parameter name
 }

 // console.log(returnSecondValue(myNewArray)); // here myNewArray is use because it is the argument name
 // myNewArray is passed as an argument
 console.log(returnSecondValue([200, 400, 500, 1000]));


 const square = function (number) {
     return number * number;
   };
   
   console.log(square(4)); // 16


   const factorial = function fac(n) {
     return n < 2 ? 1 : n * fac(n - 1);
   };
   
   console.log(factorial(3)); // 6