/**
 * Scope determines the accessibility (visibility) of variables.

    JavaScript has 3 types of scope:

    Block scope
    Function scope
    Global scope
 */

// 1. Block scope
{
    let sum = 2;
}
// x can NOT be used here


// 2. Function Scope
function findSum(a,b) {
    let sum = a + b;
    console.log(sum);
    // code here CAN use sum
}
// sum can NOT be used here


// 3. Global Scope
let sum = 10;

function calcSum(a,b){
    sum = a + b;
    console.log(sum);
}

console.log(sum);
// sum can be accessed anywhere