// Declare constants for DOM elements
/*jshint esversion: 6 */

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const playerInput = document.getElementById('user-choice');
const compInput = document.getElementById('computer-choice');
const reset = document.getElementById('reset');
const scoreboard = {
    player: 0,
    computer: 0
};

//   Plays the game

function runGame(e) {

    const playerChoice = e.target.id;
    playerInput.innerHTML = playerChoice;
    const computerChoice = getComputerChoice();
    compInput.innerHTML = computerChoice;
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, computerChoice);
}

// Generates the computer's random choice
// Parts of code was used from a YouTube video (https://www.youtube.com/watch?v=WR_pWXJZiRY)

function getComputerChoice() {

    const random = Math.random();

    if (random < 0.34) {
        return 'Rock';
    } else if (random <= 0.67) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Determines the game winner

function getWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return 'Draw';

    } else if (playerChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            return 'You Lose';
        } else {
            return 'You Win';
        }

    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            return 'You Lose';
        } else {
            return 'You Win';
        }

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            return 'You Lose';
        } else {
            return 'You Win';
        }
    }
}

// Shows the result by updating the scores

function showResult(winner, computerChoice) {

    if (winner === 'You Win') {
        scoreboard.player++;
        result.innerHTML = 'You Win';
        result.style.cssText = 'color: #44ff00; background-color: #171717; padding: 5px 10px; border-radius: 3px';

    } else if (winner === 'You Lose') {
        scoreboard.computer++;
        result.innerHTML = 'You Lose';
        result.style.cssText = 'color: #fa0505; background-color: #171717; padding: 5px 10px; border-radius: 3px';

    } else {
        result.innerHTML = "It's a Draw";
        result.style.cssText = 'color: #fff; background-color: #171717; padding: 5px 10px; border-radius: 3px';
    }

    score.innerHTML = `
    <p>Your Score: ${scoreboard.player}</p>
    <p>Computer Score: ${scoreboard.computer}</p>
    `;
}

// Resets the score

function resetScore() {

    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Your Score: 0</p>
        <p>Computer Score: 0</p>
    `;
}

// Event Listeners

choices.forEach(choice => choice.addEventListener('click', runGame));
reset.addEventListener('click', resetScore);