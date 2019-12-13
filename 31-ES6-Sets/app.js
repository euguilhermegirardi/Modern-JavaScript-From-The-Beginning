// SETS - Store unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);
// Does not add "100" twice. You can see Set(4) on console.log.
console.log(set1);

const set2 = new Set([1, true, 'string']);
// Here you can see Set(3) on console.log.
console.log(set2);


// Get count
// Same as 'console.log(set1) it tells you how many but does not count '100' twice.
console.log(set1.size);


// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
// It says 'false' because it's not a primitive type like number, string, boolean...
console.log(set1.has({ name: 'John' }));


// Delete from set
set1.delete(100);
console.log(set1);


// ITERATING THROUGH SETS
// For..of
for (let item of set1) {
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
});

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
