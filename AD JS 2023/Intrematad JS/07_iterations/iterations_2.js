// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// const Array1 = ['A','B','C'];

// for (const element of Array1){
//      console.log(element);
// }

// const iterable = [10,20,30,40,50];

// for (let value of iterable){
//      value += 1;
//      console.log(value);
// }

// const iterable = new Map([
//      ["A", 1],
//      ["B", 2],
//      ["C", 3],
// ]);

// for (const entry of iterable){
//      console.log(entry);
// }

// for (const [key, value] of iterable){
//      console.log(value);
// }


// const iterable = new Set([1, 1, 2, 2, 3, 3]);
// for (const value of iterable) {
//   console.log(value);
// }

// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr){
//   // console.log(num);
// }

// const Sentens = "Hello world"
// for (const word of Sentens){
//   console.log(`Each word is ${word}`)
// }

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map); 

// for (const [Key, value] of map){
//   console.log(Key, ":-", value);
// }

// const myObject = {
//   game1: 'NFS',
//   game2: 'Spiderman'
// }


// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// const myObject = {
//   js: 'javascript',
//   cpp: 'C++',
//   rb: "ruby",
//   swift: "swift by apple"
// }

// for (const key in myObject) {
//   //console.log(`${key} shortcutis for ${myObject[key]}`);
// }


// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
//   }


const coding = ["js", "ruby", "java", "python", "cpp"]


coding.forEach( function (valu){
  console.log(valu);
})

coding.forEach( (item) =>{
  console.log(item);
})

// function prentmebro(item){
//   console.log(item);
// }
// coding.forEach(prentmebro)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]

myCoding.forEach( (item) =>{
  console.log(item.languageFileName);
})