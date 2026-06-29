let humanScore = 0;
let computerScore = 0;

console.log("Hello World");

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);

    if (index == 0) {
        return "rock";
    } else if (index == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let playerChoice = prompt("Enter your choice: rock, paper, or scissors");
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === "rock" && humanChoice === "rock") {
        return "Draw";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        return "You win";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "Computer wins";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "Computer wins";
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        return "Draw";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        return "You win";
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        return "Draw";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "Computer wins";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return "You win";
    }
}


function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
    console.log(humanSelection)
    console.log(computerSelection)
}

playGame();
playGame();
playGame();
playGame();
playGame();