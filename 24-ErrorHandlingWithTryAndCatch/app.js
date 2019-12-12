const user = { email: 'jdoe@gmail.com' };

try {
  // Produce a ReferenceError
  //myFunction();

  // Produce a TypeError
  //null.myFunction();

  // Will produce SyntaxError
  //eval('Hello World');

  // Will produce a URIError
  //decodeURIComponent('%');

  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch (e) {
  console.log(`User Error: ${e.message}`);

  // ReferenceError, message and the line (everything).
  //console.log(e);

  // Just a message.
  //console.log(e.message);

  // Just a ReferenceError.
  //console.log(e.name);

  // Type of error
  //console.log(e instanceof TypeError);
} finally {
  // Runs no matter what happens above.
  console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');
