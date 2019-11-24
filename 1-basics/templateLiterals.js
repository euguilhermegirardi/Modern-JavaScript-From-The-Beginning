const name = 'John';
const age = 28;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (literals) (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
  '<li>Name:' + name + '</li>' +
  '<li>Age:' + age + '</li>' +
  '<li>Job:' + job + '</li>' +
  '<li>City:' + city + '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}


// With template strings (literals) (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 3}</li>
    <li>${hello()}</li>
    <li>${age > 27 ? 'Over 27' : 'Under 27'}</li>
  </ul>
`;

document.body.innerHTML = html;
