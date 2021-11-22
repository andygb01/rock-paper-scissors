// GAME

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++;
  }
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++;
  }
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// UI for GAME

const scoreInfo = document.getElementById('scoreInfo');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const endGame = document.getElementById('endGame');
const restartButton = document.getElementById('restartButton');

rockButton.addEventListener('click', () => handleClick('ROCK'));
paperButton.addEventListener('click', () => handleClick('PAPER'));
scissorsButton.addEventListener('click', () => handleClick('SCISSORS'));
restartButton.addEventListener('click', restartGame);

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndGame();
    return;
  }

  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();

  if (isGameOver()) {
    openEndGame();
  }
}

function updateChoices(playerSelection, computerSelection) {
  const playerSignClassName = `shoot-${playerSelection.toLowerCase()}`;
  const computerSignClassName = `shoot-${computerSelection.toLowerCase()}`;

  playerSign.classList = `rpss ${playerSignClassName} active`;
  computerSign.classList = `rpss ${computerSignClassName} active`;
}

function updateScore() {
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}

function openEndGame() {
  endGame.classList.add('active');
}

function closeEndGame() {
  endGame.classList.remove('active');
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = 'Score';
  playerScorePara.textContent = 'Player: 0';
  computerScorePara.textContent = 'Computer: 0';
  playerSign.classList.remove('active');
  computerSign.classList.remove('active');
  endGame.classList.remove('active');
}