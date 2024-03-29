let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlots = document.querySelector(".guesses");
const remainig = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a number!");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100!");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random  Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You Guessed it Right Number is ${randomNumber}.`,
      "yellowgreen"
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low", "red");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high", "red");
  }
}
function displayGuess(guess) {
  //Cleaning up the user input value
  userInput.value = "";
  guessSlots.innerHTML += `${guess}, `;

  numGuess++;
  remainig.innerHTML = `<span style="color: rgba(255, 45,45 , 0.902);">${
    11 - numGuess
  }</span>`;
}

function displayMessage(message, color) {
  lowOrHi.innerHTML = `<h2 style="color: ${color}">${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", " ");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  p.style = "cursor:pointer;";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlots.innerHTML = "";
    remainig.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
