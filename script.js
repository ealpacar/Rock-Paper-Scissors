function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log("Computer chose: " + computerSelection);
        console.log("You chose: " + playerSelection);

        if (playerSelection === computerSelection.toLowerCase()) {
            console.log("Draw!");
            return "It's a draw! Computer chose " + computerSelection + ".";
        } else if (
            (playerSelection === "rock" && computerSelection === "Scissors") ||
            (playerSelection === "paper" && computerSelection === "Rock") ||
            (playerSelection === "scissors" && computerSelection === "Paper")
        ) {
            console.log("You win!");
            return "You win! Computer chose " + computerSelection + ".";
        } else {
            console.log("Computer wins!");
            return "Computer wins! Computer chose " + computerSelection + ".";
        }
    } else {
        console.log("Invalid choice.");
        return "Invalid choice. Please choose Rock, Paper, or Scissors.";
    }
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rock").addEventListener("click", () => {
        const result = playRound("rock");
        document.getElementById("result").textContent = result;
    });
    document.getElementById("paper").addEventListener("click", () => {
        const result = playRound("paper");
        document.getElementById("result").textContent = result;
    });
    document.getElementById("scissors").addEventListener("click", () => {
        const result = playRound("scissors");
        document.getElementById("result").textContent = result;
    });
});
