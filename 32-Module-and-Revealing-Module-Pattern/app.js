// Basic structure
// Module
// (function () {
//   // Declare private (can't access outside the module) vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = 'Hello World';

//   const privateChangeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     publicChangeText: function () {
//       privateChangeText();
//       console.log(text);
//     }
//   }
// })();
// // Public function
// UICtrl.publicChangeText();
// // Private function
// //UICtrl.privateChangeText();
// console.log(UICtrl.text); // undefined



// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    //add: add,
    add,// same as above
    get
  }
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(1));
