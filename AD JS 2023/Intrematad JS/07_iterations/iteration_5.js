// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 

//Syntax
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

//=================

// const myNumbers = [1,3,3]
//  const myTotal = myNumbers.reduce(function (acc, currVal){
//      console.log(`acc: ${acc} and currentvalue is : ${currVal}`);
//      return acc + currVal
// },0)

// console.log(`Total vlu is : ${myTotal}`);

// using arrow funtion
// const myTotal = myNumbers.reduce ((acc,currVal) => acc+currVal, 0)
// console.log(`Total vlu is : ${myTotal}`);


const shoopCard = [
     {
         itemName: "js course",
         price: 999
     },
     {
         itemName: "py course",
         price: 2999
     },
     {
         itemName: "mobile dev course",
         price: 5999
     },
     {
         itemName: "data science course",
         price: 12999
     },
 ]
 const pricePay = shoopCard.reduce((acc,item) => acc + item.price,0)
 console.log(pricePay)
 