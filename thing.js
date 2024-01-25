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
