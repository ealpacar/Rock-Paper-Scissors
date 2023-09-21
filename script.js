function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log("Computer chose: " + computerSelection);
        console.log("You chose: " + playerSelection);

        if (playerSelection === computerSelection.toLowerCase()) {
            console.log("Draw!");
        } else if (
            (playerSelection === "rock" && computerSelection === "Scissors") ||
            (playerSelection === "paper" && computerSelection === "Rock") ||
            (playerSelection === "scissors" && computerSelection === "Paper")
        ) {
            console.log("You win!");
        } else {
            console.log("Computer wins!");
        }
    } else {
        console.log("Invalid choice.");
    }
}
function game(){
    let rounds = 0
    let tobeplayed = prompt("How many rounds you want to play?");
    while (rounds < tobeplayed) {
        playRound()
        rounds++;


      }
}
game()

