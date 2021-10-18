// document.addEventListener("DOMContentLoaded", function() {

//     const buttons = document.getElementsByTagName("button");
//     const result = document.getElementById("result");

//     for (let button of buttons) {
//         button.addEventListener("click", getUserChoice);

//     }


// });

// function getUserChoice() {

//     const userChoice = document.getElementById("user-choice");

//     userChoice.innerText = this.getAttribute("id");

//     computerChoice();

// }

// function computerChoice() {
    
//     const choices = ["Rock", "Paper", "Scissors"];

//     const computerInput = choices[Math.floor(Math.random() * 3)];

//     document.getElementById("computer-choice").innerHTML = `${computerInput}`;
// }

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('scores');
const result = document.getElementById('result');
const playerInput = document.getElementById('user-choice');
const compInput = document.getElementById('computer-choice');

// const scoreboard = {
//     player: 0,
//     computer: 0
//   };

  function playGame(e) {
      
    const playerChoice = e.target.id;
    playerInput.innerHTML = playerChoice;
    const computerChoice = getComputerChoice();
    compInput.innerHTML = computerChoice;
    const winner = getWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner)
    result.innerHTML = winner;

  }

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

  choices.forEach(choice => choice.addEventListener('click', playGame));