// Create some arrays
const numbers = [43, 56, 33, 23, 33, 44, 36];
const numbers2 = new Array(22, 32, 45, 12, 32);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const midex = [22, 'Hello', true, undefined, null, { a: 1, b: 3 }, new Date()];

let val;

// Get array length
// val = numbers.length;
// // Check if is Array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// MUTATING ARRAYS
// Adds on the end
// numbers.push(250);
// // Adds on the front
// numbers.unshift(120);
// // Take off from end (250)
// numbers.pop();
// // Take off from the front (120)
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// Reverse
//numbers.reverse();

// Concate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
//val = numbers.sort();

// Use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// Find - first number before 50.
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
