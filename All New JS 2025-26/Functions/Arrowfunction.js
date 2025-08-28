// this -> this is current context
// it is used to refer to the current instance of the function
// it is lexically bound, meaning it retains the context in which it was defined
// mostly used in callbacks and methods
// example:
// const obj = {
//   value: 42,
//   getValue: function() {
//     return () => {
//       console.log(this.value);
//     };
//   }
// };

// const fn = obj.getValue();
// fn(); // 42

// const user = {
//      username: "nasim",
//      price: 999,
//      welcomeMessage: function(){
//           console.log(`${this.username}, welcome to our website!`);
//           // console.log(this)// shows the user object 
//      }
// };

// user.welcomeMessage(); // nasim, welcome to our website!
// user.username = "SAM"
// user.welcomeMessage(); // SAM, welcome to our website! // becose this.username is lexically bound

//  console.log(this)// shows {} this becose the function is called in the global context
 // in node environment this refers {} object
 //in browser environment, this will be the "window" object // in browser environment window is global object
 // in node environment, this will be the global object (globalThis)


// function ipops(){
//      console.log(this);
// }
// ipops() // shows {} in node environment


// in funtion this not working becose the function is called in the global context
// this only works in object context becose it is lexically bound
// function ipops(){
//      let username = "Nasim"
//      console.log(this.username);// undefined becose this is not in object context
// }
// ipops()


// const chai = function(){
//      let username = "Nasim"
//      console.log(this.username);// undefined  because this is not in object context
// }
// chai();


const chai = () =>{
     let username = "Nasim"
     console.log(this.username); // undefined because this is not in object context
     console.log(this); // {} because arrow functions do not have their own this context
};
// chai();


// Implicit return
// Implicit return is a feature of arrow functions that allows for a more concise syntax
// If the function body consists of a single expression, the result of that expression is returned automatically
// it eliminates the need for the 'return' keyword
// it is used for concise function definitions
// for example:
// const add = (a, b) => a + b;

// const addTwo = (num1, num2) => { // explicit return
//      return num1 + num2; // basic arrow function
// }


// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// () use this not use return keyword
// { } use this with return keyword

const addTwo = (num1, num2) => {username: "Nsim"} // undefin object becose use return or ()
const addTwo = (num1, num2) => ({username: "Nsim"}) // output: { username: "Nsim" }



console.log(addTwo(5, 2)); // 7
