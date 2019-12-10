const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// Execute the funcion
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!')
      }
    }, 2000);
  });
}

// Put into the DOM
function getPosts() {
  setTimeout(function () {
    let output = '';
    // loop through with 'forEach'
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  })
