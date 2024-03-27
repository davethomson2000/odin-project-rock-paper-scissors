const choices = ["rock", "paper", "scissors"]
const container = document.querySelector("#container")
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const playerScoreText = document.querySelector("#player-score")
const computerScoreText = document.querySelector("#computer-score")
const winnerText = document.querySelector("#winner")

let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
let overallWinner = "";

rockButton.addEventListener("click", (event) => { playRound(playerChoice = getPlayerChoice(event.target.id), computerChoice = getComputerChoice()) })
paperButton.addEventListener("click", (event) => { playRound(playerChoice = getPlayerChoice(event.target.id), computerChoice = getComputerChoice()) })
scissorsButton.addEventListener("click", (event) => { playRound(playerChoice = getPlayerChoice(event.target.id), computerChoice = getComputerChoice()) })

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

function resetGame() {
    //clean up

    playerWins = 0
    computerWins = 0
    roundsPlayed = 0
    playerScoreText.textContent = playerWins
    computerScoreText.textContent = computerWins
    winnerText.textContent = ""
    while (container.firstChild)
        container.removeChild(container.firstChild)
    
}

function getRoundWinner(playerChoice, computerChoice) {
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
        playerWins++
    }
    else {
        roundWinner = "Computer"
        computerWins++
    };
    return roundWinner
}

function playRound(playerChoice, computerChoice) {
    if (roundsPlayed === 5)
        resetGame()

    let roundWinner = getRoundWinner(playerChoice, computerChoice)
    console.log("Winner was: " + roundWinner)

    const div = document.createElement("div")
    div.textContent = `Player choice: ${playerChoice} | Computer choice: ${computerChoice} | Round winner: ${roundWinner}`
    container.appendChild(div)

    roundsPlayed++
    playerScoreText.textContent = playerWins
    computerScoreText.textContent = computerWins

    //check if game is complete
    getOverallWinner(playerWins, computerWins)

 
}

function playGame() {
    //deprecated now the GUI is available
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i + ". Please choose.")
        switch (playRound(getPlayerChoice(), getComputerChoice())) {
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
    if (roundsPlayed < 5)
        return

    if (playerWins > computerWins) {
        overallWinner = "Player"
    }
    else if (playerWins < computerWins) {
        overallWinner = "Computer"
    }
    else {
        overallWinner = "Tie"
    }

    winnerText.textContent = `Overall Winner: ${overallWinner}!`

    return overallWinner
}

