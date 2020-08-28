
//dom variables

let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    inputBox = document.getElementById('guessBox'),
    guessButton = document.getElementById('guess-button'),
    triesLeft = document.getElementById('tries-left'),
    retryButton = document.getElementById('retry-button');

//game variables

let number = 0, 
    guess = 0, 
    counter = 1, 
    gamestarted = false;
    

// creating font awesome stars for tries left

let node = document.createElement("i");
node.setAttribute("class", " fa fa-heart");

// making an extra 3 clones of stars
let cln = node.cloneNode(true);
let cln1 = node.cloneNode(true);
let cln2 = node.cloneNode(true);


// hide inputbox, guess and retry buttons at beggining of game
clearGame();

//event listeners
newGameButton.addEventListener('click', () => {
	initializeGame();
});

guessButton.addEventListener('click', () => {
	captureGuessedValue();
	testGuessedValue();
	isGameOver();
});

//retryButton.addEventListener('click', function(){});

//function definitions

function clearGame(){
	if (gamestarted == false) {
		inputBox.style.display = 'none';
		guessButton.style.display = 'none';
		retryButton.style.display = 'none';
		triesLeft.style.display = 'none';
	}
}

function initializeGame () {
	  triesLeft.appendChild(node);
	  triesLeft.appendChild(cln);
	  triesLeft.appendChild(cln1);
	  triesLeft.appendChild(cln2);
	  triesLeft.style.color='green';
	  inputBox.style.display = 'inline';
	  inputBox.value = '';
	  counter = 1;
	  guessButton.style.display = 'inline';
	  guessButton.innerText = 'guess';
	  triesLeft.style.display = 'inline';
	  newGameButton.style.display = 'none';
	  textArea.innerText = 'I\'m a number between 0 and 10. What am I? (can you guess in 4 tries or less?)';
	  number = Math.trunc(Math.random() * 10);
  }

function captureGuessedValue() {
	guess = inputBox.value;  
}

function isGameOver () {
  if (counter>4) {
	  newGameButton.style.display = 'inline';
	  textArea.innerText = "Sorry, Game Over. Try Again";
	  //console.log(counter);
	  inputBox.style.display = 'none';
	  guessButton.style.display = 'none';
	  retryButton.style.display = 'none';
	  triesLeft.style.display = 'none';
  }
}

 function testGuessedValue() {
	 
	 if (counter>1){
		 triesLeft.style.color='red';
	 }
	 
	 if (guess > number) {
		 triesLeft.removeChild(triesLeft.firstElementChild);
		 textArea.innerText = "You guessed higher, try again.!";
		 guessButton.innerText = "Retry!";
		 ++counter;
	 }
	 
	 else if (guess < number) {
		 triesLeft.removeChild(triesLeft.firstElementChild);
		 textArea.innerText = "You guessed lower, try again.!";
		 guessButton.innerText = "Retry!";
		 ++counter;
	 }
	 
	 else {
		 textArea.innerText = "You guessed correctly, congrats.! You got " + (5-counter)/4*100 + "%.";
		 newGameButton.style.display = 'inline';
		 inputBox.style.display = 'none';
		 guessButton.style.display = 'none';
		 triesLeft.style.display = 'none';
	 }
 }
