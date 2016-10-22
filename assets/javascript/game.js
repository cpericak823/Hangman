//Variables
var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var movies = ['the - blues - brothers', 'ferris - bueller\'s -  day -  off', 'the - break - up', 'home - alone', 'the - dark - knight'];
var computerWord = '';
var userGuess = '';
var matchedGueses = '';
var totalGuesses = '';
var guessesLeft = '';
var wins = 0;
var allowedGuesses = 15;
var lettersGuessed = [];

//Start Game
function resetGame() {
}
//Computer picks random movie title from list of array
function pickMovie() {
    chosenMovie = movies[Math.floor(Math.random() * movies.length)];
}

//Computer shows underscores to represent the number of letters in movie title
pickMovie()
	computerWord = chosenMovie.replace(/[a-z]/g,'_', ' ');
    document.getElementById("computerWord").innerHTML = 'Title: ' + computerWord

//show the word in the console
console.log(chosenMovie);

//show number of allowed guesses
function listGuesses(){
	var allowedGuesses;
}
	listGuesses()
	document.getElementById("allowedGuesses").innerHTML = 'Guesses left: ' + allowedGuesses

//Show the score
function score(){
	var wins;
}
	score()
	document.getElementById("score").innerHTML = 'Score: ' + wins

//Record every letter the user clicks
document.onkeyup = function(event){
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	lettersGuessed.push(userGuess);
	document.getElementById("userGuess").innerHTML = 'Letters Guessed: ' + lettersGuessed

//add the letters clicked to the dom
	if (computerWord.indexOf(userGuess) > -1);{
		computerWord = chosenMovie.replace(/_/g,"[a-z]");
		allowedGuesses--;
	}
	lettersGuesses();
}
// Updates the "hangmanWordArea" div to contain the current word "blanked out"
// (using "_" characters) except for the letters they have gotten correct
function lettersGuesses() { 
	console.log ("we made it")
	var computerWordElement = document.getElementById("computerWord");
	for (i = 0; i < chosenMovie.length; i++) {
		console.log("letters" + lettersGuessed[i]);
		console.log ("words" + chosenMovie[i]);
		if (lettersGuessed[i] === chosenMovie[i]) {
			computerWord[i] = lettersGuessed[i];
		}
	}
}


	
