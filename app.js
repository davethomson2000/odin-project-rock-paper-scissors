console.log("Ello World!")

const choices = ["rock", "paper", "scissors"]
const playerChoice = getPlayerChoice()
const computerChoice = getComputerChoice()

function getComputerChoice() {

};

function getPlayerChoice() {
    let selection;
    while (!(choices.includes(selection))) { 
        selection = prompt("Rock | Paper | Scissors:").toLowerCase();
        console.log(selection);
        console.log(choices)
        console.log(choices.includes(selection))
    }
    console.log(selection)
};

function playRound(playerChoice, computerChoice) {
    
}

function playGame() {

}