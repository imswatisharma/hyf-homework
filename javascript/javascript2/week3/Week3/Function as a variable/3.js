//3. Create an object that has a key whose value is a function. Try calling this function.

let objectExample = {
    key:myFunction
  };
  
  function myFunction() {
    console.log("Inside myFunction");
  }
  
  //console.log(objectExample);
  objectExample.key();