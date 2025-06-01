const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button[data-choice]");
const message = document.getElementById("message");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playRound(playerChoice, computerChoice);
  });
});

function playRound(player, computer) {
  if (player === computer) {
    message.textContent = `It's a draw! You both chose ${player}.`;
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[player] === computer) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    message.textContent = `You win! ${player} beats ${computer}.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    message.textContent = `You lose! ${computer} beats ${player}.`;
  }
}
