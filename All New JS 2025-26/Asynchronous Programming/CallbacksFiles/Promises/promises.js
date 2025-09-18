// Promises
// Promises are a modern alternative to callbacks for handling asynchronous operations in JavaScript. They provide a cleaner and more manageable way to work with asynchronous code by allowing you to attach success and failure handlers.

// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// syntax let promise = new Promise((resolve, reject) => { ... });

// resolve, reject is a function that is called to indicate the success or failure of the asynchronous operation. // handler 
// promis is object in js , ther three states
// 1. pending
// 2. fulfilled
// 3. rejected


// State machine: pending → fulfilled or rejected. Resolution is async: even Promise.resolve(1).then(...) runs handlers as microtasks (not synchronously).

// Common API

// new Promise((resolve, reject) => { ... })
// Promise.resolve(value), Promise.reject(err)
// Promise.all(iterable) — resolves when all resolve; rejects on first rejection.
// Promise.allSettled(iterable) — returns array of results when all complete.
// Promise.race(iterable) — settles with the first settled promise (fulfill or reject).
// Promise.any(iterable) — resolves with first fulfillment, rejects with AggregateError if all reject.
// .then(onFulfilled, onRejected), .catch(onRejected) (alias), .finally(onFinally)


// Pitfalls
// Creating a new promise wrapper around something that already returns a promise (Promise constructor antipattern).
// Not returning inside .then (breaks chaining).
// Unhandled rejections (attach .catch() or use unhandledrejection listener).


// Example: Promise chaining
// function fetchUser() { /* returns promise */ }
// fetchUser()
//   .then(user => fetchProfile(user.id))
//   .then(profile => doSomething(profile))
//   .catch(err => console.error('error!', err));


// Promise States
// A Promise can be in one of three states:Pending: The initial state, neither fulfilled nor rejected. The asynchronous operation is still in progress.
// Fulfilled: The operation completed successfully, and the Promise resolves to a value.
// Rejected: The operation failed, and the Promise rejects with an error or reason.

// Once a Promise is fulfilled or rejected, it is settled and cannot change state.

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("Success") : reject("Error");
  }, 1000);
});



const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    if (true) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((result) => console.log(result)) // Operation successful!
  .catch((error) => console.error(error));

  


  
let checkEven = new Promise((resolve, reject)=>{
     let number = 4;
     if (number % 2 == 0) resolve ("Even Num");
     else reject("Odd Num");
});

checkEven
.then((message) => console.log(message))
.catch((message) => console.log((message)))



let promise = new Promise((resolve, reject) => {
     console.log("I am Promise");
     resolve(200); // if work done
     // reject("Error occurred"); // if work failed
});

promise.then((data) => { // then() method is used to handle the resolved value of a promise.
promise.then((data) => {
     console.log("Promise resolved with data:", data);
});
// promise.catch is used to handle errors
promise.catch((error) => {
     console.error("Promise rejected with error:", error);
});
});



// Core Methods and Features
// .then, .catch, and .finally
// .then(onFulfilled, onRejected)
// : Handles the fulfilled value or optionally the rejected reason.javascript

// myPromise.then(
//   (result) => console.log(result),
//   (error) => console.error(error)
// );

// .catch(onRejected): 
// Handles errors (rejections).

// myPromise.catch((error) => console.error(error));

// .finally(onFinally): 
// Runs regardless of whether the Promise is fulfilled or rejected.javascript

// myPromise.finally(() => console.log("Promise settled"))




