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
}
// Updates the "hangmanWordArea" div to contain the current word "blanked out"
// (using "_" characters) except for the letters they have gotten correct
function refreshMatchedLetters() {
  // Create a new emtpy string
  // For each letter in the currentWord (sounds like a for loop)
  // If they have guessed the letter, then concatenate that letter on the
  // new empty string you've created, otherwise concatenate "_"
  // Update the inner html of the hangmanWordArea to equal this new string
}

// By default, in the html (when the page loads) this div will initially
// contain a "welcome" message: "Welcome to Hangman, press any key to play!"
// This will be overwritten by this method once they start playing their first
// game

// Checks to see if user has won, is still guessing, or has lost and displays
// The proper message in the message div accrodingly based on one of those
// 3 outcomes.
function refreshWinOrLossed() {
  // Check to see if user has won by calling hasUserWon()
  // If hasUserWon is true
      // update messageDiv innerHTML to show a "You won!" message
  // Else if there are guesses left
      // set the innerHTML of the message div to an empty string
      // (game is still in progress, no message to show)
  // Else
      // They have run out of guesses and lost, display a "You Lost" message
}

// Returns true if the hangmanWordAreaDiv's inner html === the currentWord
// Increments wins if they've won
// Sets guessesRemaining to zero, so next keypress starts a new game
// Else returns false
function hasUserWon() {

}

// Takes 1 argument --> letterGuessed
// Checks to see if letter exists in currentWord
// Properly adds the guess to guessedLetters & matchedLetters
// Increments totalGuesses
// Decrements guessesLeft
function matchGuess(letterGuessed) {

}

// Takes 1 argument --> the letter guessed
// Returns true if the letterGuessed is in the array of validLetters
function isAValidLetter(letterGuessed) {

}

// Takes 1 argument -> the letter guessed
// Checks to see if the letter guessed is in the array of guessed letters
// Alerts ("you've already guessed this letter") if they have already
// Returns true if they have, returns false if they have not
function hasGuessedLetter(letterGuessed) {

}

  // If guessesLeft is 0
      // call resetGame()

  // Else
      // Parse out the letterGuessed from the event
      // If it is a validLetter && the user has not guessed the letter yet
          // call matchGuess() to match the guess with the word

  // call refreshViewGameStats() on each keyup