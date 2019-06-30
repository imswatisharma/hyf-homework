//2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function printStringAfterDelay(delay, stringToLog) {
    setTimeout(function(){ console.log(stringToLog); }, delay);
  }
  
  printStringAfterDelay(2000, "Hi after 2 seconds");
  printStringAfterDelay(5000, "Bye after 5 more seconds");