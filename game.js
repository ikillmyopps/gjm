function playGuessingGame() {
  // code for guessing game goes here
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let score = 10;

  function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    if (userGuess < secretNumber) {
      document.getElementById("result").innerHTML = "Too low!";
      score--;
    } else if (userGuess > secretNumber) {
      document.getElementById("result").innerHTML = "Too high!";
      score--;
    } else {
      document.getElementById("result").innerHTML = "Congratulations! You guessed the number.";
      document.getElementById("hint").innerHTML = "";
      alert("Great job! Want to play again?");
      location.reload(); // reloads the page to start a new game
    }
    document.getElementById("score").innerHTML = "Score: " + score;
  }

  function getHint() {
    let hint = "";
    if (secretNumber > 50) {
      hint += "The number is greater than 50. ";
    }
    if (secretNumber % 2 === 0) {
      hint += "The number is even. ";
    }
    document.getElementById("hint").innerHTML = hint;
  }

  // create HTML elements for guessing game
  let gameDiv = document.createElement("div");
  gameDiv.id = "guessingGame";
  let input = document.createElement("input");
  input.type = "number";
  input.id = "guessInput";
  let button = document.createElement("button");
  button.innerHTML = "Submit Guess";
  button.onclick = checkGuess;
  let result = document.createElement("p");
  result.id = "result";
  let scoreP = document.createElement("p");
  scoreP.id = "score";
  let hintButton = document.createElement("button");
  hintButton.innerHTML = "Get Hint";
  hintButton.onclick = getHint;
  let hint = document.createElement("p");
  hint.id = "hint";

  // append HTML elements to game container
  gameDiv.appendChild(input);
  gameDiv.appendChild(button);
  gameDiv.appendChild(result);
  gameDiv.appendChild(scoreP);
  gameDiv.appendChild(hintButton);
  gameDiv.appendChild(hint);
  document.getElementById("gameContainer").appendChild(gameDiv);
}

function playMathQuiz() {
  // code for math quiz goes here
}

function playWordGuessingGame() {
  // code for word guessing game goes here
}
