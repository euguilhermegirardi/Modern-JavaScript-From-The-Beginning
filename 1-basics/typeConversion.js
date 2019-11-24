let val;

// Number to string
val = String(5);
val = String(4 + 4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.31'); // decimals

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length); // only works with strings
// console.log(val.toFixed(2)); // only works with numbers

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
