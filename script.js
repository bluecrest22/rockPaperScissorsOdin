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
    if(humanChoice == computerChoice) {
        console.log(`Draw! You drew ${humanChoice}, computer drew ${computerChoice}`);
        return 0;
    } 
    else if(
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else {
        console.log(`You lose! ${humanChoice} is beat by ${computerChoice}`);
        return -1;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let outcome = playRound(humanChoice, computerChoice);
        if(outcome == 1) {
            humanScore++;
        } else if(outcome == -1) {
            computerScore++;
        }
    }
    if(humanScore == computerScore) {
        console.log("Draw Game!");
    } else if(humanScore > computerScore) {
        console.log("You win this time");
    } else {
        console.log("Skynet wins");
    }
}

playGame();
