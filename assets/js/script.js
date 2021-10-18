document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", getUserChoice);

    }


});

function getUserChoice() {

    const userChoice = document.getElementById("user-choice");

    userChoice.innerText = this.getAttribute("id");

    computerChoice();

}

function computerChoice() {
    
    const choices = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * 3);

    document.getElementById("computer-choice").innerHTML = `${choices[random]}`;
}