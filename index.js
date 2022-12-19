function getComputerChoice() {
  let items = ["rock", "paper", "scissors"];
  let computerSelection = items[Math.floor(Math.random() * items.length)];

  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

  return playerSelection;
}

function playRound() {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  let roundItem = "";

  if (playerSelection === computerSelection) {
    roundItem = "It's a Draw";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundItem = "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundItem = "You lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundItem = "You win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundItem = "You lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundItem = "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundItem = "You lose! Scissors beats Paper";
  } else {
    roundItem = "Invalid input";
  }

  console.log("You have chosen " + playerSelection);
  console.log("The computer choice " + computerSelection);
  console.log(roundItem);
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  console.log("Round finished")
}

game();
