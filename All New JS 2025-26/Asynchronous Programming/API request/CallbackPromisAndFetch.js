const promiseOne = new Promise(function(resolve, reject){ // propis is creted 
     //Do an async task // DB calls, cryptography, network
     setTimeout(function(){
         console.log('Async task is compelete');
         resolve() // his is mathode // it is connact to .then
     }, 1000)
 })
 //Promise consumed"
 promiseOne.then(function(){ // then is related to resolve // In .then have callback or funtion this fution automatiocly one augrument call
     console.log("Promise consumed");
 })
 
// Async task is compelete // firest task is complite then resolve() then Promise consumed
// Promise consumed

// ========================================

 new Promise(function(resolve, reject){ // not store any vareable that by use .then
     setTimeout(function(){
         console.log("Async task 2");
         resolve() 
     }, 1000)
 
 }).then(function(){
     console.log("Async 2 resolved");
 })

 
 //==============================
 
 const promiseThree = new Promise(function(resolve, reject){ // (resolve, reject) this is fution
     setTimeout(function(){
         resolve({username: "Chai", email: "chai@example.com"}) // () this parametter pass data
     }, 1000)
 })
 
 promiseThree.then(function(user){
     console.log(user);
 }) // output: { username: 'Chai', email: 'chai@example.com' }
 
 const promiseFour = new Promise(function(resolve, reject){
     setTimeout(function(){
         let error = true
         if (!error) {
             resolve({username: "hitesh", password: "123"})
         } else {
             reject('ERROR: Something went wrong') // ERROR: Something went wrong
         }
     }, 1000)
 })
 
  promiseFour
  .then((user) => {
     console.log(user);
     return user.username
 }).then((username) => {
     console.log(username);
 }).catch(function(error){
     console.log(error);
 }).finally(() => console.log("The promise is either resolved or rejected")) // this use in laset when all task is complite 
 
 
 // =============================
 
 const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
         let error = true
         if (!error) {
             resolve({username: "javascript", password: "123"})
         } else {
             reject('ERROR: JS went wrong')
         }
     }, 1000)
 });
 
 async function consumePromiseFive(){
     try {
         const response = await promiseFive
         console.log(response);
     } catch (error) {
         console.log(error);
     }
 }
 
 consumePromiseFive()
 

 // fetch
 // async function getAllUsers(){
 //     try {
 //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
 
 //         const data = await response.json()
 //         console.log(data);
 //     } catch (error) {
 //         console.log("E: ", error);
 //     }
 // }
 
 //getAllUsers()
 
 fetch('https://api.github.com/users/hiteshchoudhary')
 .then((response) => {
     return response.json()
 })
 .then((data) => {
     console.log(data);
 })
 .catch((error) => console.log(error))
 
 // promise.all
 // yes this is also available, kuch reading aap b kro.