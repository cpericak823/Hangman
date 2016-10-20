//Variables
var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var movies = ['the blues brothers', 'ferris bueller\'s day off', 'the break up', 'home alone', 'the dark knight'];
var computerWord = '';
var userGuess = '';
var matchedGueses = '';
var totalGuesses = '';
var guessesLeft = '';
var score = 0;
var allowedGuesses = 15;

//Start Game
function resetGame() {
}
//Computer picks random movie title from list of array
function pickMovie() {
    chosenMovie = movies[Math.floor(Math.random() * movies.length)];
}

//Computer shows underscores to represent the number of letters in movie title
    pickMovie()
    computerWord = chosenMovie.replace(/[a-z]/g, '_')
    document.getElementById("computerWord").innerHTML = computerWord



//show the word in the console
// console.log(computerWord);



//If the user guesses a letter that is in the title, replace the underscore that represents the letter with that letter
'computerWord'.indexOf(userGuess);
  // They've picked a letter that is in the word


  // They have not picked a letter that is NOT IN the word




//If the user guesses a letter that is not in the title, decrease the number of guesses by 1
// --- use if and else statements to compare to set title
// --- use wrong subtract guesses by 1 using --

var showLives = document.getElementById('lives')

//If the user guesses the movie title in less that 15 guesses, add 1 to the number of wins

// if (userGuess===movies[0])
// {
// 	alert('Correct!');
// 	score++;
// }
// else {
// 		alert('Wrong');
// 		}

// if (userGuess===movies[1])
// {
// 	alert('Correct!');
// 	score++;
// }
// else {
// 		alert('Wrong');
// 		}

// if (userGuess===movies[2])
// {
// 	alert('Correct!');
// 	score++;
// }
// else {
// 		alert('Wrong');
// 		}

// if (userGuess===movies[3])
// {
// 	alert('Correct!');
// 	score++;
// }
// else {
// 		alert('Wrong');
// 		}

// if (userGuess===movies[4])
// {
// 	alert('Correct!');
// 	score++;
// }
// else {
// 		alert('Wrong');
// 		}


// //If the user guesses the movie title, play a fanfare sound
// // --- use ('../tada.aiff').play()

// //Repeat the game until all movie titles have been used once
// // --- use a for loop
// for (var i = 0; i < movies.length; i++); {
// 	console.log(movies[i]);
// }

// //After all 5 titles have been used, reset game
// if ((wins === 5) || (losses === 5)) {
//         resetScore();
//     }



//Record every letter the user suggests below but do not repeat letters
document.onkeyup = function(event){

var letter = String.fromCharCode(event.keyCode).toLowerCase();

lettersGuessed = document.getElementById('userGuess');

var pElement = document.createElement('p');
};