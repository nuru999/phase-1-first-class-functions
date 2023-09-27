// Write your command here://

// Function that takes a callback function as an argument and calls it.
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Function that returns a named function.
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // Function logic goes here
      console.log("This is a named function.");
    }
  
    // Return the named function
    return namedFunction;
  }
  
  // Function that returns an anonymous function.
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      // Function logic goes here
      console.log("This is an anonymous function.");
    };
  }
  
  // Example usage:
  function callbackFunction() {
    console.log("Callback function called.");
  }
  
  receivesAFunction(callbackFunction);
  
  const namedFunc = returnsANamedFunction();
  namedFunc();
  
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc();
  