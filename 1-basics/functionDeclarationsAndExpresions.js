// Function Declarations

function greet(firstName = 'John', lastName = ' Doe') {
  //console.log('Hello');
  //if (typeof firstName === 'undefined') { firstName = 'John' }
  //if (typeof lastName === 'undefined') { lastName = ' Doe' }
  return 'Hello ' + firstName + '' + lastName;
}

//console.log(greet('John', ' Doe'));
console.log(greet());




// Functions Expresions
const square = function (x = 3) {
  return x * x;
};

console.log(square());




// Immidiatley Invokable Function Expresions - IIFEs
(function () {
  console.log('IIFE Ran...');
})();

(function (name) {
  console.log('Hello ' + name);
})('Brad');




// Property Methods
const todo = {
  add: function () {
    console.log('add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();
