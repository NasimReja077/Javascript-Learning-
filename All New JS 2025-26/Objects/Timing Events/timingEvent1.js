// setTimeout
// setTimeout is a method that executes a function after a specified delay (in milliseconds).
// it is commonly used for delaying the execution of code or creating timers.
// it was introduced in JavaScript 1.1 and is part of the WindowOrWorkerGlobalScope mixin.
// kechu somi pro barkora 

// The setTimeout() method schedules a function to execute once after a specified delay (in milliseconds).

// Syntax:
// const timeoutId = setTimeout(callbackFunction, delay, [arg1, arg2, ...]);

// console.log("Start");
// setTimeout(() => {
//      console.log("This runs after 2 seconds");
// }, 2000);
// console.log("End");

// Explanation: setTimeout() delays the execution of the callback by 2000ms (2 seconds). The code continues running synchronously ("End" is logged immediately), and the callback runs asynchronously after the delay.

// // With Arguments:
// setTimeout((name, age) => {
//      console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }, 2000, "Alice", 30);



// setInterval ba bar ber kora 

// setInterval()The setInterval() method repeatedly executes a function at a specified interval (in milliseconds) until stopped.

// Syntax:javascript

// const intervalId = setInterval(callbackFunction, interval, [arg1, arg2, ...]);

// callbackFunction: The function to execute repeatedly.
// interval: Time in milliseconds between each execution.
// arg1, arg2, ...: Optional arguments to pass to the callback.
// intervalId: A unique ID returned by setInterval(), used to cancel the interval with clearInterval().


// let count = 0;
// const intervalId = setInterval(() =>{
//      console.log(`Count: ${count}`);
//      count++;
//      if (count === 6) {
//           clearInterval(intervalId); // Stop the interval after 6 executions
//      }
// }, 1000);


// clearTimeout
// The clearTimeout() method cancels a scheduled setTimeout() before it executes.
// clearTimeout(timeoutId);
// clearTimeout is a method that cancels a timeout previously established by setTimeout().
// It takes a single argument: the ID of the timeout to cancel.
// Example:

// const timeoutId = setTimeout(() => {
//      console.log("This will not run");
// }, 2000);
// clearTimeout(timeoutId); // Cancels the timeout
// console.log("Timeout canceled");

// Explanation: clearTimeout(timeoutId) prevents the setTimeout callback from executing by canceling the scheduled task.

// clearInterval()

// The clearInterval() method stops a setInterval() from continuing its repeated execution.
// Syntax:
// clearInterval(intervalId);
// intervalId: The ID returned by setInterval().

// Example:
// const intervalId = setInterval(() => {
//      console.log("This will not run");
// }, 1000);
// clearInterval(intervalId); // Cancels the interval
// console.log("Interval canceled");
// Explanation: clearInterval(intervalId) prevents the setInterval callback from executing by canceling the scheduled task.

// let seconds = 0;
// const intervalId = setInterval(() => {
//   console.log(`Seconds: ${seconds}`);
//   seconds++;
//   if (seconds === 5) {
//     clearInterval(intervalId); // Stop after 5 seconds
//     console.log("Interval stopped");
//   }
// }, 1000);

// Explanation: setInterval() runs every second, incrementing seconds. When seconds reaches 5, clearInterval(intervalId) stops further executions.



// Key Points and Best PracticesAsynchronous Nature:Both setTimeout() and setInterval() are asynchronous, meaning they don’t block the execution of other code. They schedule tasks in the browser’s (or Node.js) event loop.
// Example:javascript

// console.log("First");
// setTimeout(() => console.log("Second"), 0); // 0ms delay
// console.log("Third");

// Output:

// First
// Third
// Second

// Why? Even with a 0ms delay, setTimeout queues the callback in the event loop, executing it after synchronous code completes.

// Storing IDs:Always store the timeoutId or intervalId to allow cancellation with clearTimeout() or clearInterval().
// Example:javascript

// const id = setTimeout(() => console.log("Delayed"), 1000);
// clearTimeout(id); // Cancel if needed

// Use Cases:setTimeout: For one-time delayed actions (e.g., showing a notification after 3 seconds, debouncing user input).
// setInterval: For repeated actions (e.g., updating a clock, polling an API).
// clearTimeout/clearInterval: To stop scheduled tasks (e.g., stopping a timer when a user clicks a button).

// Avoiding Memory Leaks:Always clear intervals or timeouts when they’re no longer needed, especially in single-page applications or when components unmount (e.g., in React).
// Example:javascript

// const intervalId = setInterval(() => console.log("Running"), 1000);
// // Later, when done:
// clearInterval(intervalId);

// Browser/Node.js Context:These methods are part of the global window object in browsers or the global object in Node.js.
// In modern JavaScript, they’re often used with arrow functions or promises for cleaner code.


// Practical Example Combining All Methods
//Simple countdown timer

// Simple countdown timer
let timeLeft = 10;

const timerId = setInterval(() => {
  console.log(`Time left: ${timeLeft} seconds`);
  timeLeft--;
  
  if (timeLeft === 0) {
    clearInterval(timerId); // Stop the interval
    setTimeout(() => {
      console.log("Time's up!");
    }, 1000); // Delayed final message
  }
}, 1000);

// Cancel a separate timeout
const warningId = setTimeout(() => {
  console.log("This won't appear");
}, 3000);

clearTimeout(warningId); // Cancel the warning


// Explanation:setInterval() runs every second, counting down timeLeft.
// When timeLeft reaches 0, clearInterval() stops the interval, and a setTimeout() schedules a final message.
// A separate setTimeout() (for a warning) is canceled with clearTimeout().


// Summary
// setTimeout(): Schedules a function to run once after a specified delay. Returns a timeoutId.
// setInterval(): Repeatedly runs a function at a specified interval. Returns an intervalId.
// clearTimeout(): Cancels a setTimeout() using its timeoutId.
// clearInterval(): Stops a setInterval() using its intervalId.
// These methods are asynchronous, leveraging the event loop to manage timing without blocking other code.


