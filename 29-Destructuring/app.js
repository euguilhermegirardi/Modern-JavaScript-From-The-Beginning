// Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];

// // Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];
// //console.log(...rest);

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });



// Array Destructuring
const people = ['1-John', '2-Beth', '3-Mike'];
const [person1, person2, person3] = people;

console.log(person2, person1, person3);



// Parse array returned from function - SAME AS ABOVE
function getPeople() {
  return ['4-John', '5-Beth', '6-Mike'];
}
let person4, person5, person6;
[person4, person5, person6] = getPeople();

console.log(person5, person4, person6);



// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function () {
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

//New ES6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);
sayHello();
