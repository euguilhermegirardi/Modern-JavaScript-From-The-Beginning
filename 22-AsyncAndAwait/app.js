// Promise
// async function myFunc() {
//   return 'Hello'
// }
// console.log(myFunc());

// // Not a Promise
// async function myFunc() {
//   return 'Hello'
// }
// myFunc()
//   .then(res => console.log(res));




//Not best example!!!
// async function myFunc2() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello - Async/Await'), 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }
// myFunc2()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


// Best way!!!
async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
