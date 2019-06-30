//9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke ) {
	if(shouldTellFunnyJoke) {
		logFunnyJoke();
	} else {
		logBadJoke();
	}
}

function funnyJoke() {
	console.log("A funny joke");
}

function badJoke() {
	console.log("A bad joke");
}

jokeCreator(false, funnyJoke, badJoke);

jokeCreator(true, funnyJoke, badJoke);