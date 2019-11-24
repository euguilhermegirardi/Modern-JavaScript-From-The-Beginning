// // var, let, const
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);


// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case (best one)
// var first_name = 'Sara'; // Underscore (php)
// var FirstName = 'Gui'; // Pascal case
// var firstname;



// VAR
var name = 'VAR - John Doe';
console.log(name);
name = 'VAR - Steve Smith';
console.log(name);

// LET
let name2;
name2 = 'LET - John Doe';
console.log(name2);
name2 = 'LET - Steve Smith';
console.log(name2);


// CONST (can't be reasigned)
const name3 = 'CONST - John';
console.log(name3);
// Cannot reassign
//name = 'Sara';
//const greeting;

const person = {
  name: 'CONST - John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
//numbers = [1, 2, 3, 4, 5, 6]; CAN'T DO IT
numbers.push(6);
console.log(numbers);
