function getComputerChoice() {
  let items = ["rock", "paper", "scissors"];
  let computerSelectionItem = items[Math.floor(Math.random() * items.length)];

  return computerSelectionItem;
}

let playerSelection;
let roundResult = "";
let playerScore = 0;
let computerScore = 0;

function score() {
  switch (roundResult) {
    case "You win! Rock beats Scissors":
    case "You win! Paper beats Rock":
    case "You win! Scissors beats Paper":
      playerScore++;
      break;
    case "You lose! Rock beats Scissors":
    case "You lose! Paper beats Rock":
    case "You lose! Scissors beats Paper":
      computerScore++;
      break;
  }

  return playerScore && computerScore;
}

function playRound() {
  let computerSelection = getComputerChoice();
  playerSelection;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundResult = "You lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "You win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundResult = "You lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundResult = "You lose! Scissors beats Paper";
  } else {
    roundResult = "It's a Draw";
  }

  score();
}

function createTextResults() {
  let computerSelection = getComputerChoice();

  let playerSelectionP = document.querySelector(".player-selection");
  let emptyPlayerSelectionSpan = document.querySelector(
    ".player-selection-num"
  );

  let computerScoreP = document.querySelector(".computer-selection");
  let emptyComputerSelectionSpan = document.querySelector(
    ".computer-selection-num"
  );

  let roundResultP = document.querySelector(".round-results");
  let emptyRoundResultSpan = document.querySelector(".round-results-num");

  let playerSelectionText = document.createElement("span");
  playerSelectionText.textContent = "You have chosen " + playerSelection;
  playerSelectionP.replaceChildren(
    emptyPlayerSelectionSpan,
    playerSelectionText
  );

  let computerSelectionText = document.createElement("span");
  computerSelectionText.textContent =
    "The computer choice " + computerSelection;
  computerScoreP.replaceChildren(
    emptyComputerSelectionSpan,
    computerSelectionText
  );

  let roundResultText = document.createElement("span");
  roundResultText.textContent = roundResult;
  roundResultP.replaceChildren(emptyRoundResultSpan, roundResultText);
}

function createTextScores() {
  let playerScoreText = document.querySelector(".player-score");
  let emptyPlayerScoreSpan = document.querySelector(".player-score-num");

  let computerScoreText = document.querySelector(".computer-score");
  let emptyComputerScoreSpan = document.querySelector(".computer-score-num");

  let playerScoreNum = document.createElement("span");
  playerScoreNum.textContent = "The player score is " + playerScore;
  playerScoreText.replaceChildren(emptyPlayerScoreSpan, playerScoreNum);

  let computerScoreNum = document.createElement("span");
  computerScoreNum.textContent = "The computer score is " + computerScore;
  computerScoreText.replaceChildren(emptyComputerScoreSpan, computerScoreNum);
}

let buttonPlayerSelection = document.querySelector(".btn-rock");
buttonPlayerSelection.addEventListener("click", () => {
  playerSelection = "rock";

  playRound();
  createTextResults();
  createTextScores();
  stopGame();
});

buttonPlayerSelection = document.querySelector(".btn-paper");
buttonPlayerSelection.addEventListener("click", () => {
  playerSelection = "paper";

  playRound();
  createTextResults();
  createTextScores();
  stopGame();
});

buttonPlayerSelection = document.querySelector(".btn-scissors");
buttonPlayerSelection.addEventListener("click", () => {
  playerSelection = "scissors";

  playRound();
  createTextResults();
  createTextScores();
  stopGame();
});

function stopGame() {
  let scoreContainer = document.querySelector(".score-results");
  let winnerRound = document.createElement("h1");
  scoreContainer.appendChild(winnerRound);

  let buttonsSelection = document.querySelector(".buttons-container");

  if (playerScore === 5) {
    buttonsSelection.remove(buttonsSelection);
    winnerRound.textContent = "You win! congrats";
  } else if (computerScore === 5) {
    buttonsSelection.remove(buttonsSelection);
    winnerRound.textContent = "You lose! keep trying";
  }
}

const resetGame = document.querySelector(".reset-btn");
resetGame.addEventListener("click", () => {
  location.reload();
});
