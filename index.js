function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random()*items.length)];
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

if(playerSelection === "rock"){
    console.log("You have chosen Rock");
}else if(playerSelection === "paper"){
    console.log("You have chosen Paper");
}else if(playerSelection === "scissors"){
    console.log("You have chosen Scissors");
}else{
    console.log("Invalid input");
}

const computerSelection = getComputerChoice();

if(computerSelection === "rock"){
    console.log("The computer chose Rock");
}else if(computerSelection === "paper"){
    console.log("The computer chose Paper");
}else{
    console.log("The computer chose Scissors");
}

function playRound() {
}

