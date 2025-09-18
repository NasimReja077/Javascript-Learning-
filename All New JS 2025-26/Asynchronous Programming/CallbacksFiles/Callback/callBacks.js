/**
 * Call stack
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
 */


/**
 * What is Asynchronous Programming?
 * Asynchronous programming allows JavaScript to execute tasks non-sequentially, meaning the program can continue running other tasks while waiting for time-consuming operations (e.g., API calls, file I/O, or timers) to complete. JavaScript is single-threaded, so asynchronous programming is essential to avoid blocking the main thread, ensuring smooth user experiences in web applications.Synchronous vs. Asynchronous:
 * Synchronous: Code executes line by line, waiting for each operation to complete before moving to the next.
 * Asynchronous: Code schedules tasks to run later, allowing the program to proceed without waiting for the task to finish.
exmples: -
// Synchronous
console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // Blocking operation
console.log("End");

// Asynchronous
console.log("Start");
setTimeout(() => console.log("This runs later"), 1000); // Non-blocking
console.log("End");
*/

// console.log("Start");
// setTimeout(() => console.log("This runs later"), 1000); // Non-blocking
// console.log("End");

// Callbacks A callback is a function passed as an argument to another function, executed after the parent function completes.
// (Nested Callbacks)
// function getData(dataId){ // dataId is
//      setTimeout(() => {
//          console.log(`Data fetched for ID: ${dataId}`);
//      }, 3000); //  () => { console.log(...) } is a callback function
// }

// getData(1);
// getData(2);
// getData(3);
// getData(4);
// getData(5);


// function getData(dataId, getNextData){ // getNextData = callback
//      setTimeout(() => {
//           console.log("data", dataId); // after 3 sec data fetch // not in sequence
//           if(getNextData){ // if there is a next data callback
//                getNextData(); // call the next data callback
//           } // end of if
//      }, 2000);
// }

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


// getData: This is the main function that simulates fetching data. It takes two arguments: an ID for the data to be fetched and an optional callback function to be executed afterward.

// It uses setTimeout to mimic an asynchronous operation, which is why the data is not fetched "in sequence" immediately. The console.log("data", dataId) line runs after a 2-second delay.

// dataId: This is a parameter that represents the unique identifier for the data you want to retrieve. When you call the function, you pass a value for this parameter, like 1, 2, 3, etc.

// The if(getNextData){ getNextData(); } block checks if a callback was provided. If it was, the callback is then called, which allows you to "chain" asynchronous operations together.


/**
 * Callbacks were the original way to handle asynchronous operations in JavaScript.
 * Pros:
 * Simple for basic tasks.
 * Widely supported in older codebases.
 * Flexible: Can be used to handle various asynchronous operations.
 *
 * Cons:
 * Callback Hell: Nested callbacks make code hard to read and maintain.
 * Error Handling: Difficult to manage errors across multiple callbacks.
 * Inversion of Control: You lose control over when the callback is executed.
 * 
 */


function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });


// step3(() => {
//         step1(() => {
//             console.log("All steps completed");
//         });
//     }); // error

//  Error Handling Issues in Callbacks
function stepWithError(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5; // Randomly simulate an error
        if (error) {
            callback("An error occurred in stepWithError");
        } else {
            console.log("Step with potential error completed");
            callback(null);
        }
    }, 1000);
}
stepWithError((err) => {
    if (err) {
        console.error(err);   
    } else {
        step1(() => {
            step2(() => {
                step3(() => {
                    console.log("All steps completed");
                });
            });
        }); 
     }
});   



function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Cannot divide by zero"), null);
    } else {
        callback(null, a / b);
    }
}

function result(error, result) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Result:", result);
    }
}

divide(10, 2, result);
divide(10, 0, result);


