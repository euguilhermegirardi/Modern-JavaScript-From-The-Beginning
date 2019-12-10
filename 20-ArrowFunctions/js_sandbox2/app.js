const sayHello = function () {
  console.log('Hello - Normal function');
}
sayHello();

// Arrow function
const sayHello2 = () => {
  console.log('Hello - Arrow Function');
}
sayHello2();

// One line function does not need braces
const sayHello3 = () => console.log('Hello - Even shorter')
sayHello3();

// Same as above
const sayHello4 = () => 'Hello - Same as above';
console.log(sayHello4());


// Return object with arrow function
const sayHello5 = () => ({ msg: 'Hello - Return Object' });
console.log(sayHello5());

// Single param does not need parenthesis
const sayHello6 = name => console.log(`Hello, ${name} - Single Param`);
sayHello6('Girardi');

// Multuiple params need parenthesis
const sayHello7 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName} - Multiple Param`);
sayHello7('Brad', 'Traversy');


// Arrow Function with callbacks
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function (name) {
  return name.length;
});

// Shorter
const nameLengths2 = users.map((name) => {
  return name.length;
});

// Shortest
const nameLengths3 = users.map(name => name.length);

console.log(nameLengths);
console.log(nameLengths2);
console.log(nameLengths3);
