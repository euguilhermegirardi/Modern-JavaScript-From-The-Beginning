// Get the button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// Execute the function when the button is clicked
function getJokes(e) {
  e.preventDefault();

  // Number of jokes
  const number = document.querySelector('input[type="number"]').value;

  // AJAX request (xhr request)

  // Creating the object
  const xhr = new XMLHttpRequest();

  // set to 'true' to set it as asynchronous
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  // Execute what we got in the API
  xhr.onload = function () {
    if (this.status === 200) {
      // Turn into object (JSON.parse) to do a 'loop through' for an example
      const response = JSON.parse(this.responseText);

      // Puting inside of the DOM
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
          //output += `<p>Category</p><li>${joke.categories}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
}
