var miyazaki = [
  "The Castle of Cagliostro",
  "Nausicaa of the Valley of the Wind",
  "Castle in the Sky",
  "My Neighbor Totoro",
  "Kiki's Delivery Service",
  "Porco Rosso",
  "Princess Mononoke",
  "Spirited Away",
  "Howl's Moving Castle",
  "Ponyo",
  "The Wind Rises",
  "How Do You Live?",
  "On Your Mark",
  "Kujiratori",
  "Koro no Daisanpo",
  "Imaginary Flying Machines",
  "Looking for a Home",
  "Hoshi o Katta Hi",
  "Mizugumo Monmon",
  "Pandane to Tamago Hime",
  "Panda! Go, Panda!",
  "Whisper of the Heart",
  "Arrietty",
  "From Up on Poppy Hill"
];

var wins = 0;
var currentWord = [];
var guessesLeft = 10;
var alreadyGuessed = [];
var answerIndex = [Math.floor(Math.random() * miyazaki.length)];
var answer = miyazaki[answerIndex];

document.getElementById("wins").textContent = wins;
document.getElementById("currentWord").textContent = currentWord.join("");

document.getElementById("guessesLeft").textContent = guessesLeft;
document.getElementById("alreadyGuessed").textContent = alreadyGuessed;

function keyPressed(event) {
  if (
    event.key.match(/^[a-zA-Z]$/) &&
    alreadyGuessed.indexOf(event.key) === -1
  ) {
    // YOU CAN DO IT!!
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].toLowerCase() === event.key) {
        currentWord[i] = answer[i];
      }
    }
    document.getElementById("currentWord").textContent = currentWord.join("");

    if (answer.toLowerCase().indexOf(event.key) === -1) {
      // Incorrect Guess
      guessesLeft--;
      alreadyGuessed.push(event.key);
      document.getElementById("alreadyGuessed").textContent = alreadyGuessed;
    } else {
      // Correct Guess
      if (currentWord.join("") === answer) {
        // WINNER WINNER
        wins++;
        resetGame();
        alreadyGuessed = [];
        document.getElementById("alreadyGuessed").textContent = alreadyGuessed;
        if (wins === 5) {
          document.getElementById("congratsTotoro").style.display = "block";
          document.getElementById("resetButton").style.display = "block";
          document.body.style.backgroundColor = "white";
          document.querySelector(".game").style.display = "none";
          document.getElementById("hangman").style.display = "none";
          document.querySelector(".header").style.display = "none";
          document.getElementById("music").pause();
        }
      }
    }

    document.getElementById("guessesLeft").textContent = guessesLeft;

    if (guessesLeft < 1) {
      document.getElementById("hiddenTotoro").style.display = "block";
      document.getElementById("resetButton").style.display = "block";
      document.body.style.backgroundColor = "red";
      document.querySelector(".game").style.display = "none";
      document.getElementById("hangman").style.display = "none";
      document.querySelector(".header").style.display = "none";
      document.getElementById("music").pause();
    }
  }

  document.getElementById("guessesLeft").textContent = guessesLeft;
}

function reloadPage() {
  location.reload();
}

function resetGame() {
  currentWord = [];
  guessesLeft = 10;
  alreadyGuessed = [];

  answerIndex = [Math.floor(Math.random() * miyazaki.length)];
  answer = miyazaki[answerIndex];

  for (var i = 0; i < answer.length; i++) {
    if (answer[i].match(/[A-z]/)) {
      currentWord[i] = "_";
    } else {
      currentWord[i] = answer[i];
    }
  }

  console.log("I do not condone cheating!!!");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log(
    answer
      .split("")
      .reverse()
      .join("")
  );
  document.getElementById("wins").textContent = wins;
  document.getElementById("currentWord").textContent = currentWord.join("");

  document.getElementById("guessesLeft").textContent = guessesLeft;
}

resetGame();
document.addEventListener("keydown", keyPressed);
