// Rock, Paper, Scissors!!!

console.log("Let's play Rock, Paper, Scissors. First to 5 wins.")

// Set starting scores and display them
let playerScore = 0
let cpuScore = 0
console.log('Player wins: ' + playerScore)
console.log('Computer wins: ' + cpuScore)

// Display scores
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("cpuScore").innerHTML = cpuScore;

// Buttons list
let buttons =  document.querySelectorAll('button');


// use forEach method to iterate through the buttons
buttons.forEach((button) => {

       // listener for a click on witch button
     button.addEventListener('click', () => {

            

         // Function for randomizing computers pick
        function computerPlay() {
            const choices = ['Rock', 'Paper', 'Scissors'];
            const cpuChoice = Math.floor(Math.random()*choices.length);
            return choices[cpuChoice]
        }

        // Call funtion for the computers pick
        let cpuPick = computerPlay()
        let userPick = button.id

        // Display the users pick
        if (userPick == 'Rock'){
            document.getElementById("playerPicked").innerHTML = '⛰️';
        } else if (userPick == 'Paper'){
            document.getElementById("playerPicked").innerHTML = '📜';
        } else if (userPick == 'Scissors'){
            document.getElementById("playerPicked").innerHTML = '✂️';
        }

        // Display the computers pick
        if (cpuPick == 'Rock'){
            document.getElementById("cpuPicked").innerHTML = '⛰️';
        } else if (cpuPick == 'Paper'){
            document.getElementById("cpuPicked").innerHTML = '📜';
        } else if (cpuPick == 'Scissors'){
            document.getElementById("cpuPicked").innerHTML = '✂️';
        }

        if (userPick == cpuPick){

            console.log("tie");
            document.getElementById("resultDisplay").innerHTML = 'You Tied';
        }   else if (
            (userPick == 'Rock') && (cpuPick == 'Paper') ||
            (userPick =='Paper') && (cpuPick == 'Scissors') ||
            (userPick == 'Scissors') && (cpuPick == 'Rock')
        ) {
            console.log('You Lose')
            document.getElementById("resultDisplay").innerHTML = 'You Lose';
            cpuScore++;
        }   else if (
            (userPick == 'Rock') && (cpuPick == 'Scissors') ||
            (userPick == 'Paper') && (cpuPick == 'Rock') ||
            (userPick == 'Scissors') && (cpuPick == 'Paper')
        ) {
            console.log('You Win!')
            document.getElementById("resultDisplay").innerHTML = 'You Win!';
            playerScore++;
        }   else {
            console.log('Invalid Input');
            console.log(userPick);
            console.log(cpuPick);
        }

        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("cpuScore").innerHTML = cpuScore;

        setTimeout(() => {
            if (playerScore == 5){
                alert('YOU WIN! CLICK "OK" TO PLAY AGAIN.');
                window.location.reload();
            } else if (cpuScore == 5){
                alert('Sorry, you lose. Click "ok" to play again.');
                window.location.reload();
            }
        }, 20);

        });
    });
