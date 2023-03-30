// Random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// rikazivanje poruka korisniku
const displayMessage = function (message) {
  document.getElementById("message").textContent = message;
};

// funkcija za prikazivanje trenutnog broja poena
const displayScore = function (score) {
  document.getElementById("score").textContent = score;
};

// funkcija za prikazivanje najveceg rezultata
const displayHighScore = function (highScore) {
  document.getElementById("highScore").textContent = highScore;
};

// funkcija za resetovanje igre
const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Guess a number between 1 and 20");
  displayScore(score);
  document.getElementById("guess").value = "";
  document.querySelector("body").style.backgroundColor = "#585858";

};
// kod koji je napisan ispod se desava kada se klikne button Guess
document.getElementById("guessButton").addEventListener("click", function () { 
  const guess = Number(document.getElementById("guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } 
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // azuriranje HighScora
    if (score > highScore) {
      highScore++
      displayHighScore(highScore);
    }
  } 
  else if (guess !== secretNumber) {
    // provera da li user ima jos poena
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } 
    
    else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

// kod koji je napisan ispod se desava kada se klikne button Enter
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const guess = Number(document.getElementById("guess").value);

    if (!guess) {
      displayMessage("⛔ No number! ⛔");
    } 
    else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number! ");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";  

      if (score > highScore) {
        highScore = score;
        displayHighScore(highScore);
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        displayScore(score);
      } else {
        displayMessage("💥 You lost the game!");
        displayScore(0);
      }
    }
  }
});

document.getElementById("restartButton").addEventListener("click", resetGame)
