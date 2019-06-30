//2. Create a function as a const and try creating a function normally. Call both functions.

function normalFunction() {
    console.log("Normal function");
  }
  
  const a = function constantFunction() {
    console.log("Constant function");
  }
  
  normalFunction();
  //constantFunction(); // error: Uncaught ReferenceError: constantFunction is not defined
  a();