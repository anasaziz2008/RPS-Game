let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;
let shouldReset = false;

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

const buttons = document.querySelectorAll("button")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const result = document.querySelector("ul")



rock.addEventListener("click", (event) => {

    if (shouldReset) {
        playerScore = 0;
        computerScore = 0;
        totalRounds = 0;
        result.replaceChildren();
        shouldReset = false;
    }

    totalRounds += 1;
    const resultItem = document.createElement('li');
    const resultText = document.createElement('span');

    let computerChoice = getComputerChoice();
    if (computerChoice === "rock") {
        resultText.textContent = `Draw, Player: ${playerScore}  Computer: ${computerScore}`;


    } else if (computerChoice === "scissors") {
        playerScore += 1;
        resultText.textContent = `Player Wins, Player: ${playerScore}  Computer: ${computerScore}`;


    } else if (computerChoice === "paper") {
        computerScore += 1;
        resultText.textContent = `Computer Wins, Player: ${playerScore}  Computer: ${computerScore}`;
    }

    resultItem.appendChild(resultText)
    result.appendChild(resultItem);
    checkRounds()
})


paper.addEventListener("click", () => {

    if (shouldReset) {
        playerScore = 0;
        computerScore = 0;
        totalRounds = 0;
        result.replaceChildren();
        shouldReset = false;
    }

    totalRounds += 1;
    const resultItem = document.createElement('li');
    const resultText = document.createElement('span');

    let computerChoice = getComputerChoice();
    if (computerChoice === "paper") {
        resultText.textContent = `Draw, Player: ${playerScore}  Computer: ${computerScore}`;

    } else if (computerChoice === "rock") {
        playerScore += 1;
        resultText.textContent = `Player Wins, Player: ${playerScore}  Computer: ${computerScore}`;


    } else if (computerChoice === "scissors") {
        computerScore += 1;
        resultText.textContent = `Computer Wins, Player: ${playerScore}  Computer: ${computerScore}`;
    }
    resultItem.appendChild(resultText)
    result.appendChild(resultItem);
    checkRounds()
})


scissors.addEventListener("click", () => {

    if (shouldReset) {
        playerScore = 0;
        computerScore = 0;
        totalRounds = 0;
        result.replaceChildren();
        shouldReset = false;
    }

    totalRounds += 1;
    const resultItem = document.createElement('li');
    const resultText = document.createElement('span');

    let computerChoice = getComputerChoice();
    if (computerChoice === "scissors") {
        resultText.textContent = `Draw, Player: ${playerScore}  Computer: ${computerScore}`;


    } else if (computerChoice === "paper") {
        playerScore += 1;
        resultText.textContent = `Player Wins, Player: ${playerScore}  Computer: ${computerScore}`;


    } else if (computerChoice === "rock") {
        computerScore += 1;
        resultText.textContent = `Computer Wins, Player: ${playerScore}  Computer: ${computerScore}`;

    }
    resultItem.appendChild(resultText)
    result.appendChild(resultItem);
    checkRounds()
})


function checkRounds() {
    if (totalRounds === 5) {
        const msg = document.createElement("p")
        msg.textContent = "New round will start after any option is clicked"
        result.appendChild(msg)
        shouldReset = true;
    }
}
