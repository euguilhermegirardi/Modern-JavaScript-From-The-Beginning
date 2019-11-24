// For loop
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue;
  }

  if (i === 5) {
    console.log('stop the loop');
    break;
  }

  console.log('Number ' + i);
}
// i = i + 1  =  i++



// While loop
let i = 0;

while (i < 10) {
  console.log('While Loop - number ' + i);
  i++;
}



// Do while
let ii = 0;
do {
  console.log('Do while - number ' + ii);
  ii++;
}
while (ii < 10);



// Loop through Arrays
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let iii = 0; iii < cars.length; iii++) {
//   console.log(cars[iii]);
// }

// THE SAME AS ABOVE
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  //console.log(array);
});



// Map
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' },
];

const ids = users.map(function (user) {
  return user.name;
});

console.log(ids);



// For in Loop
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
