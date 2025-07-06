function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice() {
  const humanChoice = prompt(`Choose between: rock/paper/scissors`);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
console.log(`Human choice: ${humanSelection}`);

const computerSelection = getComputerChoice();
console.log(`Computer choice: ${computerSelection}`);

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
  } else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
  }
}

playRound(humanSelection, computerSelection);
