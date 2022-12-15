function getComputerChoice() {
  let items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

function getPlayerSelection() {
  return prompt("Rock, Paper or Scissors?").toLowerCase();
}

let playerSelection;
const computerSelection = getComputerChoice();

function itemSelection(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    console.log("You have chosen Rock");
  } else if (playerSelection === "paper") {
    console.log("You have chosen Paper");
  } else if (playerSelection === "scissors") {
    console.log("You have chosen Scissors");
  } else {
    console.log("Invalid input");
  }

  if (computerSelection === "rock") {
    console.log("The Computer chose Rock");
  } else if (computerSelection === "paper") {
    console.log("The Computer chose Paper");
  } else {
    console.log("The Computer chose Scissors");
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerSelection();
  itemSelection(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    console.log("It's a Draw");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats Paper");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats Paper");
  } else {
    console.log("Invalid input");
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("fin");
  }
}

game();
