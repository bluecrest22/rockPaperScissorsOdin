function getComputerChoice() {
    const choice = Math.round(Math.random() * 3);
    if(choice == 0) {
        return "rock";
    } else if(choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors");
    choice = choice.trim();
    return choice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
    const scoreDiv = document.querySelector("div");
    if(humanChoice == computerChoice) {
        scoreDiv.textContent = (`Draw! You drew ${humanChoice}, computer drew ${computerChoice}`);
        return 0;
    } 
    else if(
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        scoreDiv.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else {
        scoreDiv.textContent = (`You lose! ${humanChoice} is beat by${computerChoice}`);
        return -1;
    }
}

function playGame(humanScore, computerScore, round) {
    if(round  < 5) {
        return false;
    }
    const scoreDiv = document.querySelector("div");

    if(humanScore == computerScore) {
        scoreDiv.textContent = (`Draw`);
    } else if(humanScore > computerScore) {
        scoreDiv.textContent = (`You win! ${humanScore} vs ${computerScore}`);
    } else {
        scoreDiv.textContent = (`You lose! ${computerScore} is beat by ${humanScore}`);
    }
    return true;
}

const body = document.querySelector("body");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

const rockText = document.createTextNode("Rock");
const paperText = document.createTextNode("Paper");
const scissorsText = document.createTextNode("Scissors");

rockButton.appendChild(rockText);
paperButton.appendChild(paperText);
scissorsButton.appendChild(scissorsText);

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

const scoreDiv = document.createElement("div");
body.appendChild(scoreDiv);

let humanScore = 0;
let computerScore = 0;
let round = 0;

rockButton.addEventListener("click", () => {
    let outcome = playRound("rock", getComputerChoice());
    if(outcome == 1) {
        humanScore++;
    } else if(outcome == -1) {
        computerScore++;
    }
    if(playGame(humanScore, computerScore, round)) {
        humanScore = 0;
        computerScore = 0;
        round = 0;
    } else {
        round++;
    }
});
paperButton.addEventListener("click", () => {
    let outcome = playRound("paper", getComputerChoice());
    if(outcome == 1) {
        humanScore++;
    } else if(outcome == -1) {
        computerScore++;
    }
    if(playGame(humanScore, computerScore, round)) {
        humanScore = 0;
        computerScore = 0;
        round = 0;
    } else {
        round++;
    }
});
scissorsButton.addEventListener("click", () => {
    let outcome = playRound("scissors", getComputerChoice());
    if(outcome == 1) {
        humanScore++;
    } else if(outcome == -1) {
        computerScore++;
    }
    if(playGame(humanScore, computerScore, round)) {
        humanScore = 0;
        computerScore = 0;
        round = 0;
    } else {
        round++;
    }
});

