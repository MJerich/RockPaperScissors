// Rock, Paper, Scissors!!!

console.log("Let's play Rock, Paper, Scissors. First to 5 wins.")

// Set starting scores and display them
let playerScore = 0
let cpuScore = 0
console.log('Player wins: ' + playerScore)
console.log('Computer wins: ' + cpuScore)

// Function to play the game.
function game() {
    while (playerScore<5 && cpuScore<5) {

        // Get user pick
        //let userPick = prompt('Rock, Paper, or Scissors?').toLowerCase();

        // Function for randomizing computers pick
        function computerPlay() {
            const choices = ['Rock', 'Paper', 'Scissors'];
            const cpuChoice = Math.floor(Math.random()*choices.length);
            return choices[cpuChoice]
        }

        // Call funtion for the computers pick
        let cpuPick = computerPlay()

        // logging the two choices to make sure its right
        console.log(userPick)
        console.log(cpuPick)

        // Output if the user won, lost, or tied
        if (userPick == cpuPick.toLowerCase()) {
            console.log('Tie');
        }   else if (
            (userPick == 'rock') && (cpuPick == 'Paper') ||
            (userPick =='paper') && (cpuPick == 'Scissors') ||
            (userPick == 'scissors') && (cpuPick == 'Rock')
        ) {
            console.log('You Lose')
            cpuScore++;
        }   else if (
            (userPick == 'rock') && (cpuPick == 'Scissors') ||
            (userPick == 'paper') && (cpuPick == 'Rock') ||
            (userPick == 'scissors') && (cpuPick == 'Paper')
        ) {
            console.log('You Win!')
            playerScore++;
        }   else {
            console.log('Invalid Input')
        }
        //show score at the end of each round
        console.log('Player wins: ' + playerScore)
        console.log('Computer wins: ' + cpuScore)
    }
    
}

// call the funtion to play the game
game();
