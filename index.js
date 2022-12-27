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
tetxContainer = document.querySelector(".playround-results");

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

  let playerSelectionText = document.createElement("p");
  playerSelectionText.textContent = "You have chosen " + playerSelection;
  tetxContainer.appendChild(playerSelectionText);

  let computerSelectionText = document.createElement("p");
  computerSelectionText.textContent = "The computer choice " + computerSelection;
  tetxContainer.appendChild(computerSelectionText);

  let roundResultText = document.createElement("p");
  roundResultText.textContent = roundResult;
  tetxContainer.appendChild(roundResultText);
}

let scoreContainer = document.querySelector(".score-results");//usar la misma logica para el output de playround

let playerScoreText = document.querySelector(".player-score");
let emptyPlayerScoreSpan = document.querySelector(".player-score-num");

let computerScoreText = document.querySelector(".computer-score");
let emptyComputerScoreSpan = document.querySelector(".computer-score-num");


let buttonPlayerSelection = document.querySelector(".btn-rock");
buttonPlayerSelection.addEventListener("click", () => {
  playerSelection = "rock";
  playRound();
  let playerScoreNum = document.createElement("span");
  playerScoreNum.textContent = "The player score is " + playerScore;
  playerScoreText.replaceChildren(emptyPlayerScoreSpan, playerScoreNum);

  let computerScoreNum = document.createElement("span");  
  computerScoreNum.textContent = "The computer score is " + computerScore;
  computerScoreText.replaceChildren(emptyComputerScoreSpan, computerScoreNum);

  stopGame();
});

buttonPlayerSelection = document.querySelector(".btn-paper");
buttonPlayerSelection.addEventListener("click", () => {
  playerSelection = "paper";
  playRound();

  let playerScoreNum = document.createElement("span");
  playerScoreNum.textContent = "The player score is " + playerScore;
  playerScoreText.replaceChildren(emptyPlayerScoreSpan, playerScoreNum);

  let computerScoreNum = document.createElement("span");  
  computerScoreNum.textContent = "The computer score is " + computerScore;
  computerScoreText.replaceChildren(emptyComputerScoreSpan, computerScoreNum);
});

buttonPlayerSelection = document.querySelector(".btn-scissors");
buttonPlayerSelection.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound();

  let playerScoreNum = document.createElement("span");
  playerScoreNum.textContent = "The player score is " + playerScore;
  playerScoreText.replaceChildren(emptyPlayerScoreSpan, playerScoreNum);

  let computerScoreNum = document.createElement("span");  
  computerScoreNum.textContent = "The computer score is " + computerScore;
  computerScoreText.replaceChildren(emptyComputerScoreSpan, computerScoreNum);
});

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  console.log("Round finished");
}

function stopGame() {
  if(playerScore === 5 || computerScore === 5 ){
    document.write("you win"); // esto no caralfombra
  }
}

const resetGame = document.querySelector(".reset");
resetGame.addEventListener("click", () => {
  location.reload();
});