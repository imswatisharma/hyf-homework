//7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay , callback) {
    setTimeout(function(){ console.log("Waited for " + delay/1000 + " seconds"); }, delay);
    callback();
    }
    
    function callback1(){
      console.log("In callback1");
    }
    
    function callback2(){
      console.log("In callback2");
    }
    
    
    runAfterDelay(1000, callback1);
    
    runAfterDelay(2000, callback2);
    