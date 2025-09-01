// Promise API

let p1 = new Promise((resolve, reject) => {
     setTimeout(() =>{
          resolve("Value 1");
     }, 3000);
});

let p2 = new Promise((resolve, reject) => {
     setTimeout(() =>{
          // resolve("Value 2");
          reject(new Error("Error"));
     }, 1000);
});

let p3 = new Promise((resolve, reject) => {
     setTimeout(() =>{
          resolve("Value 3");
     }, 2000);
});

// p1.then((value) =>{
//      console.log(value)
// })

// p2.then((value) =>{
//      console.log(value)
// })

// p3.then((value) =>{
//      console.log(value)
// })


// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//      console.log(value)
// }); // output: [ 'Value 1', 'Value 2', 'Value 3' ]


// if any error 
// let promise_all = Promise.allSettled([p1, p2, p3])
// promise_all.then((value) => {
//      console.log(value)
// }); 

// Value 1 and Value 2 is seccss but Value 1 error
// output: 
/**[
  { status: 'fulfilled', value: 'Value 1' },
  {
    status: 'rejected',
    reason: Error: Error
        at Timeout._onTimeout (c:\Users\User\Desktop\New folder\Java Script File\All New JS 2025-26\Asynchronous Programming\Promise API\PromiseAPI.js:12:18)
        at listOnTimeout (node:internal/timers:588:17)
        at process.processTimers (node:internal/timers:523:7)
  },
  { status: 'fulfilled', value: 'Value 3' }
]*/

// who is vale short time this is print
// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then((value) => {
//      console.log(value)
// }); 


// let promise_all = Promise.resolve(6)// [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]

let promise_all = Promise.reject(new Error("Hey"))

promise_all.then((value) => {
     console.log(value)
}); 