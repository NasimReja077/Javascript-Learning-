// for loop
// for (initialization; condition; update) {
  // Code to execute
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (let i = 0; i <= 5; i++) {
//      const element = i;
//      if (i == 3) {
//         console.log("3 is found");
//      }
//      console.log(element);
// }


// for (let i = 0; i<=5; i++) {
//      console.log(`Outer loop value: ${i}`);
//      for (let j = 0; j <= 5; j++) {
//           // console.log(`  Inner loop value: ${j}`);
//           console.log(i + '*' + j + ' = ' + i*j );
//      }
// }



let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }

//  while LoopThe while loop continues executing as long as a condition is true. It’s useful when the number of iterations is unknown.

// Syntax:javascript
// while (condition) {
//   // Code to execute
// }


// let i = 0
// while (i <= 10) {
//     console.log(`Value of index is ${i}`);
//     i = i + 2
// }

// let myArray = ['flash', "batman", "superman", "Herow", "Ben10"]

// let arr = 0
// while (arr < myArray.length){
//      console.log(`value is ${myArray[arr]}`);
//      arr = arr + 1
// }



// do while 

// The do...while loop is similar to while, but it guarantees at least one execution because the condition is checked after the loop body.Syntax:javascript

// do {
//   // Code to execute
// } while (condition);


let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

do{
     console.log(`Score is ${score}`);
     score++
}
while (score <= 10);

// do while works fast and condition checked after loop body
