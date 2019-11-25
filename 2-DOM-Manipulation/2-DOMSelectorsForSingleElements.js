// document.getElementById()
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = 'pink';
// taskTitle.style.color = 'red';
// taskTitle.style.padding = '1.5rem';
// //taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:green">Task List</span>';




// Query Selector for single elements
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'yellow';
// document.querySelector('li:nth-child(3)').style.color = 'purple';
// document.querySelector('li:nth-child(4)').textContent = 'Hello, Gira!';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


// Query Selector for MULTIPLE elements
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[4]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello!';

// // Specific element
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


//
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);


// Conver HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);



//document.querySelectorAll
const items = document.querySelectorAll('ul.collection-li.collection-item');

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
