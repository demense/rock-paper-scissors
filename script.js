
    "use strict";
   
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        let randomInt = Math.floor(Math.random() * 3);
        let computerChoice = choices[randomInt];
        return computerChoice
    }
    
    function getHumanChoice() {
        let choice = prompt("Please choose one: Rock, Paper or Scissors");
        choice = choice.toLowerCase();
        switch(choice) {
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
    
    function playGame() {
        let computerScore = 0;
        let humanScore = 0;
        function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log("Your choice is " + humanChoice);
        console.log("computer's choice is " + computerChoice);
        if ((humanChoice == "rock") && (computerChoice == "rock")) {
            console.log("It's a tie");
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
            console.log("You lose!");
            computerScore = ++computerScore;
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
            console.log("You win!");
            humanScore = ++humanScore;
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
            console.log("You win!");
            humanScore = ++humanScore;
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "paper") && (computerChoice == "paper")) {
            console.log("It's a tie");
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
            console.log("You lose!");
            computerScore = ++computerScore;
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
            console.log("You lose!");
            computerScore = ++computerScore;
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
            console.log("You win!");
            humanScore = ++humanScore;
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        } else if ((humanChoice == "scissors") && (computerChoice == "scissors")) {
            console.log("It's a tie!");
            console.log("Computer's Score: " + computerScore);
            console.log("Your Score: " + humanScore);
        }
        }
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
        playRound();
        playRound();  
        playRound();
        playRound();
        gameWinner();
    }

    playGame();
