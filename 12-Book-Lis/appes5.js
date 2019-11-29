// ES5

// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Add Book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  // Create table row element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add Text Node
  div.appendChild(document.createTextNode(message));
  // Insert into the DOM (Get parent)
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);
  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className == 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Inputs
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners for Add Book
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please, fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show sucess
    ui.showAlert('Book Added!', 'success');

    // Clear Inputs
    ui.clearFields();
  }
});

// Event Listener for Delete.
document.getElementById('book-list').addEventListener('click', function (e) {
  e.preventDefault();

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Alert
  ui.showAlert('Book removed!', 'success');
})
