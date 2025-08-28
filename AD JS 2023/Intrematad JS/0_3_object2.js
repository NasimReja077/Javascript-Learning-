// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
     email: "some@gmail.com",
     fullname: {
         userfullname: {
             firstname: "hitesh",
             lastname: "choudhary"
         }
     }
 }

const newStudent ={
     Id : "1",
     email: "some@gmail.com",
     fullName: {
          firstname: "nasim",
          midilename: "reja",
          lastname: "mondal"
     },
     studentInfo: {
          deparment: {
               dep: "MCA",
               roll: "0312",
               secton: "A",
               year: "2023",
               gender: "Male",
               fiess: "Donation"
          }
     }
};
console.log(regularUser.fullname.userfullname.firstname);
console.log(newStudent.studentInfo.gender);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj5 = {obj1,obj2} // tis show a array data // but that is a object in object
//const obj5 = Object.assign(obj1,obj2) // using Object.assign for object valu
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//OR         //OR
//const obj5 = Object.assign({},obj1,obj2,obj3) // {} this is using tagert and outhr is shorch
//or
const obj5 = {...obj1,...obj2,...obj3} // mostle "..." this type is use
console.log(obj5);


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 } // all valu r spread by object
// console.log(returnedTarget === target);
// Expected output: true

const users = [
     {
         id: 1,
         email: "h@gmail.com"
     },
     {
         id: 2,
         email: "h@gmail.com"
     },
     {
         id: 3,
         email: "h@gmail.com"
     },
 ]
 
 users[1].email // syntax
//  console.log(tinderUser);
//  console.log(Object.keys(regularUser));

 // console.log(Object.keys(tinderUser)); // all data strod by array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Objects destructuring and JSON API
const course = {
     coursename: "js in hindi",
     price: "999",
     courseInstructor: "hitesh"
 }
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze