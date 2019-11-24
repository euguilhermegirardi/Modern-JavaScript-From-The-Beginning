const id = 100;

// // Equal to
// if (id == 100) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// // Not equal to
// if (id != 101) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// // Equal to value and type
// if (id === 100) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// // Not equal to value and type
// if (id !== 100) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }


// // Test if the is is defined or not
// if (typeof id !== 'undefined') {
//   console.log(`This ID is ${id}`)
// } else {
//   console.log('No ID');
// }


// Greater or less than
if (id > 200) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}


// If Else
const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}


// Logical Operators
const name = 'Steve';
const age = 70;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`)
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without braces - Not recommended
if (id === 100)
  console.log('Correct');
else
  console.log('Incorrect');
