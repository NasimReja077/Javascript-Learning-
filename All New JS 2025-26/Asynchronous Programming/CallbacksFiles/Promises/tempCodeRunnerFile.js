Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.reject("Task 3 failed")
// ])

// .then((result)=> console.log(result))
// .then((error) => console.log(error))


// // Example with timing
// const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 1000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Third'), 3000));

// Promise.all([promise1, promise2, promise3])
//      .then(values => console.log('All completed:', values))
//      .catch(error => console.log('Failed:', error));

// // Example with API calls
// const fetchUsers = fetch('https://api.example.com/users');
// const fetchPosts = fetch('https://api.example.com/posts');
// const fetchComments = fetch('https://api.example.com/comments');

// Promise.all([fetchUsers, fetchPosts, fetchComments])
//      .then(responses => Promise.all(responses.map(res => res.json())))
//      .then(data => console.log('All data:', data))
//      .catch(error => console.log('API Error:', error));