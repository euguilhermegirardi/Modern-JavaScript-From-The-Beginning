const firstName = 'William';
const lastName = 'Johson';
const age = 28;
const str = 'Hello there, my name is Gui!';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';


// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Takes the zero index from the 'firstName'.
val = firstName[0];

// charAt().
val = firstName.charAt('2');

// Get last character.
val = firstName.charAt(firstName.length - 1);

// Substring().
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Gui!', 'Jack');

// includes()
val = str.includes('Hello'); //true
val = str.includes('Hi'); //false

console.log(val);
