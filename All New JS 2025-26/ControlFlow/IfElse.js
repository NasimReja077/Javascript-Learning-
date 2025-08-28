// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// console.log("Execute");

// comparison operators
// <, >, <=, >=, ==, !=, ===, !==

// != is loose inequality (type coercion)
// if(2!= 3){
//     console.log("true");
// }
// // !== is strict inequality (no type coercion) // naiha
// if(2!== 3){
//     console.log("true");
// }


//  == vs === 
// == is loose equality (type coercion) // valu chack
// === is strict equality (no type coercion) // chacke type 


// schoop related 

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // power is not defined 
// ver is global


// shorthand notation

// const balance = 1000
// inplechit shop
// if (balance > 500) console.log("test"),console.log("test2"); // not recomend 



// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // all is true then execute // any condition is false then not execute
    console.log("Allow to buy course");
}

// any one or more condition is true then execute
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// ============

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "FEB"

// const "string" ,case "JEN", const 1 ,case 1 mach 

switch (month) {
    case "JEN":
        console.log("January");
        break;
    case "FEB":
        console.log("February");
        break;
    case "MARCH":
        console.log("March");
        break;
        
    default:
        console.log("default case match");
        break;
}