var array_of_functions = [
    first_function,
    second_function,
    third_function
]

function first_function() {
  console.log("first function");
}

function second_function() {
  console.log("second function");
}

function third_function() {
  console.log("third function");
}

for (i = 0; i < array_of_functions.length; i++) {
    array_of_functions[i]();
}