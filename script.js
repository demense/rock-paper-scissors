"use strict";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomInt = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomInt];
  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt("Please choose one: Rock, Paper or Scissors");
  choice = choice.toLowerCase();
  switch (choice) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
    default:
      alert("Please enter a valid choice.");
  }
}
let humanChoice;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.id == 'rock'){
           humanChoice = 'rock'; 
        } else if (event.target.id == 'paper'){
            humanChoice = 'paper';
        } else if (event.target.id == 'scissors'){
            humanChoice = 'scissors';
        }
        playRound();
    });
});

let computerScore = 0;
let humanScore = 0;
function playRound() {
  let computerChoice = getComputerChoice();
  console.log("Your choice is " + humanChoice);
  console.log("computer's choice is " + computerChoice);
  if (humanChoice == computerChoice) {
    console.log("It's a tie");
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose!");
    computerScore = ++computerScore;
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!");
    humanScore = ++humanScore;
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win!");
    humanScore = ++humanScore;
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose!");
    computerScore = ++computerScore;
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose!");
    computerScore = ++computerScore;
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!");
    humanScore = ++humanScore;
    console.log("Computer's Score: " + computerScore);
    console.log("Your Score: " + humanScore);
  } 
}



function playGame() {
  function gameWinner() {
    if (humanScore > computerScore) {
      console.log("You're the winner!");
    } else if (computerScore > humanScore) {
      console.log("The computer is the winner!");
    } else if (computerScore === humanScore) {
      console.log("Nobody won!");
    }
  }
  playRound();
  gameWinner();
}


