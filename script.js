function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice() {
  const humanChoice = prompt(`Choose between: rock/paper/scissors`);
  return humanChoice;
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else if (humanChoice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const human = getHumanChoice();
    const computer = getComputerChoice();
    const result = playRound(human, computer);

    console.log(`You chose: ${human}`);
    console.log(`Computer chose: ${computer}`);

    if (result === "human") {
      console.log("✅ You won this round!");
      humanScore++;
    } else if (result === "computer") {
      console.log("❌ You lost this round!");
      computerScore++;
    } else {
      console.log("🤝 This round is a tie!");
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
    console.log("----------------------------------");
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}


playGame();
