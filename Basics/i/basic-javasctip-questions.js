/**
 * Some useful basic topics and functions
 */

// 1. String templates
function returnName(fName,lName){
    // return fName + ' ' + lName;
    return `${fName} ${lName}`;
}
returnName('Himanshu','Khosla');



// 2. Some useful methods:-

// -> typeof
typeof 'abc' // string
typeof 10 // number
typeof [] // object
typeof {} // object

// -> isArray
Array.isArray([10,20]); // true
Array.isArray({ 10: true , 20 : false }); // false

// -> isNaN - is not a number
isNaN('abc')  // true
isNaN(122)    // false
isNaN('122')  // false
 


// 3. Ternary operation
var canVote;
if (votersAge >= 18) { canVote = true; }
else { canVote = false; }

// --> Using ternary opertor
var canVote = votersAge >= 18 ?'can vote' : 'cannot vote';




// 4. == vs ===
//  (check only value)  (checks value and type)

10 == '10'  // true
10 === '10' // false