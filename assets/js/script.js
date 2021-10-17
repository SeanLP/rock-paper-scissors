document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", getUserChoice);
    }

});

function getUserChoice() {

    const userChoice = document.getElementById("user-choice");

    userChoice.innerText = this.getAttribute("id");

}