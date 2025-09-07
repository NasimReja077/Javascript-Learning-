// synchronous programming is a programming paradigm that ensures tasks are executed in a sequential manner. 

// 1st work complete then go 2nd work

// Asynchronous programming is a powerful tool in JavaScript that allows for non-blocking code execution. It enables developers to write code that can perform multiple tasks simultaneously, improving the overall efficiency and responsiveness of applications.

// console.log("Work 1")
// console.log("Work 2")
// setTimeout(() => {
//     console.log("Work 2.5") // paraler work
// }, 3000)
// console.log("Work 3")
// console.log("Work 4")

// synchronous Callbacks
// function sum(a,b){
//      console.log(a+b);
// }
// function calculator(a,b, sumCallback){
//      sumCallback(a, b);
// }
// calculator(5, 10, (a,b) => {
//      console.log(a+b);
// });

// // Asynchronous Callbacks
// const hello = () =>{
//      console.log("Hello World");
// };
// setTimeout(hello, 3000); // after 3 sec hello function call


// Callbacks Hell
// callback hell is a situation where callbacks are nested within other callbacks, leading to a pyramid-like structure of code that is difficult to read and maintain.

// ----
// getData function simulates fetching data with a delay
// function getData(dataId){
//      setTimeout(() => {
//          console.log(`Data fetched for ID: ${dataId}`);
//      }, 3000);
// }
                    // getting data same time this problem // not in sequence // we get data 1 work afer 2 work not togather
// getData(1);
// getData(2);
// getData(3);
// getData(4);
// getData(5);
// -----


// ---

// function getData(dataId, getNextData){ // getNextData = callback
//      setTimeout(() => {
//           console.log("data", dataId); // after 3 sec data fetch // not in sequence
//           if(getNextData){ // if there is a next data callback
//                getNextData(); // call the next data callback
//           } // end of if
//      }, 2000);
// }

// callback hell

// getData(1, () => {
//      console.log("getting next data2");
//      getData(2, () => {
//           console.log("getting next data3"); 
//           getData(3, () => {
//                console.log("getting next data4");
//                getData(4, () => {
//                     console.log("getting next data5");
//                     getData(5);
//                });
//           });
//      });
// });

// -----

// Promises
// Promises are a modern alternative to callbacks for handling asynchronous operations in JavaScript. They provide a cleaner and more manageable way to work with asynchronous code by allowing you to attach success and failure handlers.

// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// syntax let promise = new Promise((resolve, reject) => { ... });

// resolve, reject is a function that is called to indicate the success or failure of the asynchronous operation. // handler 
// promis is object in js , ther three states
// 1. pending
// 2. fulfilled
// 3. rejected

// let promise = new Promise((resolve, reject) => {
//      console.log("I am Promise");
//      resolve(123); // if work done
//      // reject("Error occurred"); // if work failed
// })();

// promise.then((data) => { // then() method is used to handle the resolved value of a promise.
// promise.then((data) => {
//      console.log("Promise resolved with data:", data);
// });
// promise.catch is used to handle errors
// promise.catch((error) => {
//      console.error("Promise rejected with error:", error);
// });




// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data fetched for ID: ${dataId}`);
//             resolve( "Success");
//         }, 2000);
//     });
// }

// // Using Promises
// getData(1)
//     .then(() => {
//         return getData(2);
//     })
//     .then(() => {
//         return getData(3);
//     })
//     .then(() => {
//         return getData(4);
//     })
//     .then(() => {
//         return getData(5);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });



// Promises Chaining
// Promises Chaining is a technique where multiple promises are executed in sequence, with each promise waiting for the previous one to complete before starting. This allows for more readable and maintainable asynchronous code.
// In promise chaining, each .then() method returns a new promise, allowing you to chain multiple asynchronous operations together. This is particularly useful when you have a series of dependent asynchronous tasks that need to be executed in order.
// // when it is not to use
// 1. Simple Promises: If you have a simple promise chain, using .then() may be more straightforward.
// 2. Parallel Execution: If you need to execute multiple asynchronous operations in parallel, using Promise.all() with .then() may be more efficient.
// 3. Older Codebases: If you're working with an older codebase that heavily uses callbacks or .then(), introducing async/await may complicate the code.

// promises can be chained together using the then() method
// promise1.then().then().then()
// promise chaining is used when you have multiple asynchronous operations that depend on each other.
// // example:
// getData(1)
//     .then(() => {
//         return getData(2);
//     })
//     .then(() => {
//         return getData(3);
//     })
//     .then(() => {
//         return getData(4);
//     })
//     .then(() => {
//         return getData(5);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });



// Async Await
// Async Await is a syntactic sugar built on top of Promises, making asynchronous code look and behave like synchronous code. It allows you to write asynchronous code in a more readable and maintainable way.

// Async Await is used with the async keyword before a function declaration, and the await keyword before a promise.

// when using async/await, you can write asynchronous code that looks synchronous

// Advantages of Async/Await

// 1. Improved Readability: Async/await makes asynchronous code easier to read and understand by eliminating the need for chaining .then() calls.
// 2. Error Handling: You can use try/catch blocks to handle errors more gracefully compared to .catch() with promises.
// 3. Sequential Execution: Async/await allows you to write code that executes sequentially, making it easier to follow the flow of asynchronous operations.

// Disadvantages of Async/Await

// 1. Browser Support: Async/await is not supported in older browsers, so you may need to use transpilers like Babel for compatibility.
// 2. Debugging: Debugging async/await code can be more challenging compared to traditional synchronous code, as the call stack may be less clear.
// 3. Performance: In some cases, using async/await can introduce slight performance overhead compared to using promises directly.

// when it is not to use
// 1. Simple Promises: If you have a simple promise chain, using .then() may be more straightforward.
// 2. Parallel Execution: If you need to execute multiple asynchronous operations in parallel, using Promise.all() with .then() may be more efficient.
// 3. Older Codebases: If you're working with an older codebase that heavily uses callbacks or .then(), introducing async/await may complicate the code.

// syntax of async/await
// The syntax for using async/await is straightforward. You define an asynchronous function using the async keyword, and then you can use the await keyword to pause the execution of the function until a promise is resolved.

// Async is also retain a promise
// The async function itself returns a promise, which resolves with the value returned by the function or rejects with an error thrown inside the function.

// // full example
// async function fetchData() {
//     try {
//         const data1 = await getData(1);
//         const data2 = await getData(2);
//         return [data1, data2];
//     } catch (error) {
//         throw new Error("Error fetching data");
//     }
// }


function api(){
     return new Promise((resolve, reject) =>{
          setTimeout(() => {
               console.log("API data fetched");
               resolve(200);
          }, 200);
     });
}

async function getApiData() {
     await api(); // wait for the promise to resolve
     console.log("1 API data processed");
     await api(); // wait for the promise to resolve
     console.log("2 API data processed");
}




// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data fetched for ID: ${dataId}`);
//             resolve( "Success");
//         }, 2000);
//     });
// }

// // async-await
// async function fetchData() {
//     try {
//         await getData(1);
//         console.log("1 API data processed");
//         await getData(2);
//         console.log("2 API data processed");
//         await getData(3);
//         console.log("3 API data processed");
//         await getData(4);
//         console.log("4 API data processed");
//         await getData(5);
//         console.log("5 API data processed");
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }


// IIFE : (Immediately Invoked Function Expression) 
// IIFE is a function that runs as soon as it is defined.
// it is use to execute asynchronous code in a sequential manner.
// when you want to run async code immediately without waiting for an event or user action.

// IIFE is two parts 1> function expression 2> invocation
// function expression
     // (async function() {
     //     // Your async code here
     // })();

// invocation
     // (async () => {
     //     // Your async code here
     // })();



// Syntax
// (async function() {
//     // Your async code here
// })();

// (function (){
//      // ---
// })();

// (() => {
//      // ---
// })();

// (async () => {
//     // Your async code here
// })();


