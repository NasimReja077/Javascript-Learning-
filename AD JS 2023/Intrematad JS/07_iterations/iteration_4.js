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