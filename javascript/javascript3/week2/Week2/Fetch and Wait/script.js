
const button = document.querySelector ('button');
const displayJoke = document.querySelector ('h3');

function getRandomJoke () {
  return fetch ('http://api.icndb.com/jokes/random')
    .then (response => response.json ())
    .then (json => {
      displayJoke.innerHTML = json.value.joke;
      button.innerHTML = 'Get a new joke';
    })
    .catch (err => console.log ('We got an error: ' + err));
}

// Change button text when 'loading'
function loadButton () {
  button.innerHTML = 'Loading...';
}

// Set timeout for Joke
function changeJoke () {
  setTimeout (() => {
    getRandomJoke ();
  }, 3500);
}

// Button click event listener
button.addEventListener ('click', function () {
  loadButton ();
 
  Promise.all ([changeJoke ()]);
});