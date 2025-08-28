// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable.

// Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable. They are also called Lambda Functions.

//Syntax for defining the arrow function
//const functionName = (arg1, arg2, ?..) => {  
//   //body of the function  
//}  

// function expression  
  
var myfun1 = function show() {  
     console.log("It is a Function Expression");     
    }   
    // Anonymous function  
var myfun2 = function () {
     console.log("It is an Anonymous Function");
}       
    //Arrow function  

var myfun3 = () =>{
     console.log("it is an Arrow Function")
};

// myfun1();
// myfun2();
// myfun3();

const user = {
     username: "nasim reja",
     price: 775,
     HellowMessage: function() {
          console.log(`${this.username} , welcome to website`);
          console.log(this);
     }
}

// user.HellowMessage()
// user.username = "Nemo"
// user.HellowMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//      let username = "Avengers"
//      console.log(this.username);
// }

// const chai = () =>{
//      let username = "nasim"
//      console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// Without Return Keyword

var show = value => {  
    value/2;  
}  
console.log(show(50));  

this.num.forEach((num) => {   
     if (num < 30)   
         this.child.push(num);   
 });  

 let myFunction = (a, b) => a * b;
//  Arrow Function With Parameters:
hello = (val) => "Hello " + val;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions