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

// CAN BE REASSIGNED
var name = 'VAR - John Doe';
console.log(name);
name = 'VAR - John Doe Reassigned';
console.log(name);

// FUNCTION SCOPE / NOT BLOCK SCOPE
function myFunc() {
  var name2 = 'VAR - Function Scope'
  console.log(name2);
}
myFunc();
//console.log(name2); // not defined


// NOT BLOCK SCOPE / GLOBAL SCOPE
// if statements, loops, etc is not considered as a SCOPE.
if (true) {
  var firstName = 'VAR - Not Block Scope / Global Scope';
  console.log(firstName);
}
console.log(firstName);







// LET

// CAN BE REASSIGNED
let name3;
name3 = 'LET - John Doe';
console.log(name3);
name3 = 'LET - John Doe Reassigned';
console.log(name3);


// FUNCTION SCOPE AS WELL
function myFunc2() {
  let name5 = 'LET - Function Scope';
  console.log(name5);
}
myFunc2();
//console.log(name5); // not defined
// This means that a function still is a valid scope just like with 'var'.


// BLOCK SCOPE / NOT GLOBAL SCOPE
if (true) {
  let lastName = 'LET - Block Scope / Not Global Scope'
  console.log(lastName);
}

if (true) {
  let name6 = 'LET - Luke 2';
}
//console.log(name6); // not defined








// CONST

// CAN'T BE REASSIGNED
const name333 = 'CONST - John Doe / CANNOT BE REASSIGNED';
console.log(name333);
//name = 'Sara';
//const greeting;


// FUNCTION SCOPE AS WELL
function myFunc3() {
  const favName = 'CONST - Function Scope';
  console.log(favName);
}
myFunc3();


// BLOCK SCOPE / NOT GLOBAL SCOPE
if (true) {
  let nName = 'CONST - Block Scope / Not Global Scope'
  console.log(nName);
}
//console.log(nName); // not defined


// DO CAN REASSIGN ITENS BUT NOT BE REASSIGNED
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
