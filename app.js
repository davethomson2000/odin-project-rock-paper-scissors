const choices = ["rock", "paper", "scissors"]
const container = document.querySelector("#container")
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
let playerWins = 0;
let computerWins = 0;
let roundsPlayer = 0;
let overallWinner;

rockButton.addEventListener("click", (event) => {playRound(playerChoice = getPlayerChoice(event.target.id), computerChoice = getComputerChoice())})
paperButton.addEventListener("click", (event) => {playRound(playerChoice = getPlayerChoice(event.target.id), computerChoice = getComputerChoice())})
scissorsButton.addEventListener("click", (event) => {playRound(playerChoice = getPlayerChoice(event.target.id), computerChoice = getComputerChoice())})

function getComputerChoice() {
    let selection;
    randomNumber = Math.floor(Math.random() * 3);
    selection = choices[randomNumber];
    console.log("Computer chose: " + selection);
    return selection;
};

function getPlayerChoice(selection) {
    while (!(choices.includes(selection))) {
        selection = prompt("Rock | Paper | Scissors:").toLowerCase();
    }
    console.log("Player chose: " + selection);
    return selection;
};

function playRound(playerChoice, computerChoice) {
    let roundWinner;
    if (playerChoice === computerChoice) {
        roundWinner = "Tie"
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "scissors" && computerChoice === "paper")
        || (playerChoice === "paper" && computerChoice === "rock")
        ) {
            roundWinner = "Player"
        }
        else {
            roundWinner = "Computer"
        };
    
    console.log("Winner was: " + roundWinner)    
    const div = document.createElement("div")
    div.textContent = `Player choice: ${playerChoice} | Computer choice: ${computerChoice} | Round winner: ${roundWinner}`
    container.appendChild(div)
    
    return roundWinner
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i + ". Please choose.")
        switch (playRound (getPlayerChoice(), getComputerChoice()))
        {
            case "Player":
                playerWins++
                break
            case "Computer":
                computerWins++
                break
        }
    }
    
    console.log("Player wins: " + playerWins) 
    console.log("Computer wins: " + computerWins) 

    overallWinner = getOverallWinner(playerWins, computerWins)

    console.log("Overall winer: " + overallWinner)
}

function getOverallWinner(playerWins, computerWins) {
    let overallWinner
    if (playerWins > computerWins) {
        overallWinner = "Player"
    }
    else if (playerWins < computerWins) {
        overallWinner = "Computer"
    }
    else {
        overallWinner = "Computer"
    }
    return overallWinner
}

