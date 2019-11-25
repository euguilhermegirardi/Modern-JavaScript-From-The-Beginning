const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear Input
taskInput.value = '';

// Keydown
taskInput.addEventListener('keydown', runEvent);

// Keyup
taskInput.addEventListener('keyup', runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerHTML = e.target.value;
}
