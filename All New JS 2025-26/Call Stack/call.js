// Call Stack - The call stack is a data structure that keeps track of the function calls in a program. It operates in a Last In, First Out (LIFO) manner, meaning that the most recently called function is the first one to be executed.

// In the example below, we have two functions: `first` and `second`. When we call `second`, it calls `first` before logging "Second". The call stack will keep track of these function calls and execute them in the correct order.

function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();
// Output:
// First
// Second

// In this example, when `second` is called, it is added to the call stack. Then, when `first` is called within `second`, it is also added to the call stack. The call stack will execute `first` first, and once it is completed, it will return to `second` and execute the remaining code.

// ================

// Another example to demonstrate the call stack with multiple function calls.
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Hello");
}

a();
// Output:
// Hello  
// In this example, when `a` is called, it is added to the call stack. Then, when `b` is called within `a`, it is also added to the call stack. Finally, when `c` is called within `b`, it is added to the call stack and executed, logging "Hello". After `c` finishes executing, the call stack will return to `b`, and then back to `a`, completing the execution of all functions.
// ====================
