function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getHumanChoice() {
  const human = prompt(`Whats your pick? rock, paper, or scissors?`);
  return human;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You won!");
    return "human";
  } else if (humanChoice === computerChoice) {
    alert("It's a tie!");
    return "tie";
  } else {
    alert("You lost!");
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    alert(
      `Round ${i}:\nComputer: ${computerSelection}\nHuman: ${humanSelection}`
    );

    const result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    alert(`Score: Human - ${humanScore} Computer - ${computerScore}`);
  }
  if (humanScore > computerScore) {
    alert("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    alert("💻 Computer won the game!");
  } else {
    alert("🤝 It's a tie game!");
  }
}

playGame();
