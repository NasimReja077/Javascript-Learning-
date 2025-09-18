// Filter map and reduce

// FILTER 
// const myNumbers = [1,2,3,5,6,8,20,30,10,9,15]

// basic filter
// const newNumber = myNumbers.filter ( (numb) => numb >5) // callby vale > condetion >> arro funtion 
// console.log(newNumber)

// const newNumber = myNumbers.filter((numb) =>{
//      numb > 6
// })
// console.log(newNumber); // run output [] when star sope then enter return keword

// const newNumber = myNumbers.filter((numb) =>{ // hear is open a schoop then Muset write return.
//      return numb > 6
// })
// console.log(newNumber);

// const newNumber = [] // using fore each loop
// myNumbers.forEach((Numb) =>{
//      if(Numb > 6){
//           newNumber.push(Numb)
//      }
// })
// console.log(newNumber);


const books = [
     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
   ];

// let userBook = books.filter( (bk) => bk.genre === 'Science')
// userBook = books.filter((bk) => { return bk.publish >= 2000})
// console.log(userBook);

let userBook = books.filter( (bk) => bk.genre === 'History')
userBook = books.filter((bk) => { return bk.publish >= 1995 && bk.genre ==="History"})// return use for scoop
console.log(userBook);
// ==============================
// map
// map is used to create a new array by applying a function to each element of the original array.


// MAP 
const myNumbers = [1,2,3,5,6,7,9,10,15,25,35]

// const newNumber = myNumbers.map((num) => num + 10)
// console.log(newNumber);

// using schop
// const newNumber = myNumbers.map((num) => { return num + 10})
// console.log(newNumber);

const newItemNumber = myNumbers
                         .map((Num) => Num *10)
                         .map((Num) => Num + 1)
                         .filter( (Num) => Num >= 50)
console.log(newItemNumber);                         


// ================
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
 const pricePay = shoopCard.reduce((acc,item) => acc + item.price,0) // 0 is start value
 console.log(pricePay)
 