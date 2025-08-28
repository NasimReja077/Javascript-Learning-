//const coding = ["js", "ruby", "java", "python", "cpp", "R", ".C"]


// const value = coding.forEach( (item) =>{
//      console.log(item);
//      return item
// })
// console.log(value); 


// FILTER 
const myNumbers = [1,2,3,5,6,8,20,30,10,9,15]

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

