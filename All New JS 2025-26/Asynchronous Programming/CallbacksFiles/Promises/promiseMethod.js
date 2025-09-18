/**
 * @description Promise.all() is a static method that takes an iterable of promises as input and returns a single Promise.
 * This Promise is fulfilled when all of the input's promises fulfill (including when an empty iterable is passed),
 * with an array of the fulfillment values. It rejects when any of the input's promises rejects, with the first rejection reason.
 * 
 * @syntax Promise.all(iterable)
 * 
 * @param {Iterable} iterable An iterable object such as an Array or String containing promises.
 * 
 * @returns {Promise} A Promise that fulfills with an array of values from the fulfilled promises, 
 * or rejects with the reason of the first rejected promise.
 * 
 * @throws {TypeError} If the iterable passed is not iterable.
 * 
 * @example
 * Promise.all([promise1, promise2, promise3])
 *   .then(values => console.log(values))
 *   .catch(error => console.log(error));
 */
// Promise.all() Method
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])

.then((result)=> console.log(result))
.then((error) => console.log(error))


// Example with timing
const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 2000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Third'), 3000));

Promise.all([promise1, promise2, promise3])
     .then(values => console.log('All completed:', values))
     .catch(error => console.log('Failed:', error));

// Example with API calls
const fetchUsers = fetch('https://api.example.com/users');
const fetchPosts = fetch('https://api.example.com/posts');
const fetchComments = fetch('https://api.example.com/comments');

Promise.all([fetchUsers, fetchPosts, fetchComments])
     .then(responses => Promise.all(responses.map(res => res.json())))
     .then(data => console.log('All data:', data))
     .catch(error => console.log('API Error:', error));



// Promise.allSettled() Method
// Promise.allSettled() is a method that takes an iterable of Promises and returns a new Promise that resolves once all input promises have completed, regardless of whether they were fulfilled or rejected.

Promise.allSettled([
     Promise.resolve("Task 1 completed"),
     Promise.reject("Task 2 failed"),
     Promise.resolve("Task 3 completed")
])
.then((result) => console.log(result));

const promis1 = Promise.resolve(3);
const promis2 = new Promise((resolve, reject) => setTimeout((reject, 100, "Shuoo")));
const promis3 = Promise.resolve(55);

Promise.allSettled([promis1, promis2, promis3])
.then((result) => {
     result.forEach((result) =>{
          if (result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.log('Rejected:', result.reason);
      }
     });
})


// Promise.race() Method
// Promise.race() Method resolves or rejects as soon as the first promise settles.

Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));