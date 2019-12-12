// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      // ? = then
      return nextIndex < names.length ?
        // ++ = +1
        { value: names[nextIndex++], done: false } :
        { done: true }
    }
  }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);



// Generator Example
// Generator 'function*' are functions that can return multiple values,
// multiple values = yield values.
function* sayNames() {
  yield 'Jack - generator';
  yield 'Jill - generator';
  yield 'John - generator';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
