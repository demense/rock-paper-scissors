let computerScore = 0;
let humanScore = 0;

const humScr = document.querySelector(".humScr");
const comScr = document.querySelector(".comScr");
const humCho = document.querySelector(".humCho");
const comCho = document.querySelector(".comCho");
const roundWinner = document.querySelector(".roundWinner");
const gameWinner = document.querySelector(".gameWinner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomInt = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomInt];
  return computerChoice;
}

let humanChoice;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id == "rock") {
      humanChoice = "rock";
    } else if (event.target.id == "paper") {
      humanChoice = "paper";
    } else if (event.target.id == "scissors") {
      humanChoice = "scissors";
    }
    playGame();
  });
});

function playRound() {
  let computerChoice = getComputerChoice();
  humCho.textContent = "Your choose: " + humanChoice;
  comCho.textContent = "Computer choose: " + computerChoice;
  if (humanChoice == computerChoice) {
    roundWinner.textContent = "It's a tie!";
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    roundWinner.textContent = "You lost this round!";
    computerScore = ++computerScore;
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    roundWinner.textContent = "You won this round!";
    humanScore = ++humanScore;
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    roundWinner.textContent = "You won this round!";
    humanScore = ++humanScore;
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    roundWinner.textContent = "You lost this round!";
    computerScore = ++computerScore;
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    roundWinner.textContent = "You lost this round!";
    computerScore = ++computerScore;
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    roundWinner.textContent = "You won this round!";
    humanScore = ++humanScore;
    comScr.textContent = "Computer score is " + computerScore;
    humScr.textContent = "Your score is " + humanScore;
  }
}

function playGame() {
  playRound();
    if (humanScore >= 5) {
      gameWinner.textContent = "You won the game!";
    } else if (computerScore >= 5) {
      gameWinner.textContent = "The computer won the game!";
    } 
}
