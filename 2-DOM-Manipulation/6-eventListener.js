// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');
//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log('Clicked');

  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  console.log(val);
}
