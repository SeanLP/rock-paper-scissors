# Rock, Paper, Scissors Game

Rock, Paper, Scissors is a game to help friends, colleagues and family members make decisions with a simple game that has a random result. As the computer in this game chooses randomly, the results of the game give a fairer outcome than playing with ones hands. 

Users of this game will learn the rules of Rock Paper Scissors so that they can apply decision making with others in their lives. This site will be targeted towards adults and children alike as a simple app to learn, practice and have fun with.

![Responsive-Website](https://seanlp.github.io/rock-paper-scissors/assets/images/rps-responsive.png)

## Features
---
* **The Heading**

    * Featured at the top of the page, the heading shows the game name in a font and style that clearly contrasts with the background.

    * The heading clearly tells the user what game they are playing.

![Heading](https://seanlp.github.io/rock-paper-scissors/assets/images/rps-header.png)

* **The Game Area**

    * Featured at the top of the game area is a heading telling the user to make a choice below, where there are three options that give the user a hand to pick from: Rock, Paper or Scissors. These options are interactive buttons that the user can click to make their choice.

    * This section provides interactive buttons that the user can click to make their choice and play the game. When hovered these buttons change size, color and have a title so that they are more identifiable by the user.

![Game-Area](https://seanlp.github.io/rock-paper-scissors/assets/images/game-area.png)

* **The Game Results**

    * When the user clicks an option, the Javascript code chooses a random option for the computer player and then decides who the winner is.

    * Both the user's and computer's choice are displayed as well as the result.

    * The outcome of the match is announced to the user, and the score is updated for either the user or computer depending on who won the match.

    * The results and score are clear to the user, making the game easy to play, understand who won and what the score is.

![Game-Results](https://seanlp.github.io/rock-paper-scissors/assets/images/game-results.png)

* **Reset Score**

    * Below the scores there is a reset score button which allows the user to reset the scores back to 0.

    * This allows the user to reset the score without having to reload the page.

![Reset-Score](https://seanlp.github.io/rock-paper-scissors/assets/images/reset-score.png)

* **The Footer**

    * The footer section shows the rules of the Rock, Paper, Scissors game.

    * The footer is valuable to the user beacuse it clearly explains how the game is played.

![Footer](https://seanlp.github.io/rock-paper-scissors/assets/images/rules.png)

## Features Left To Implement

* When there is time, I would like to expand this game to feature the Lizard and Spock options from The Big Bang Theory tv show.

## Testing
---
* I tested playing this game in different browsers: Chrome, Safari and Firefox.

* I confirmed that the game results are always correct.

* I confirmed that the heading, options, results and footer text are all readable and easy to understand.

* I confirmed that this project is responsive, looks good and functions on all standard devices using the devtools devices toolbar.

* I confirmed the colors and font chosen are easy to read and accessible by running it through lighthouse in devtools.

![Lighthouse](https://seanlp.github.io/rock-paper-scissors/assets/images/lighthouse-results.png)

## Bugs
---
**Solved Bugs**

* I discovered when I tried to use the reset button the scores would not reset.

* I fixed this by adding and event listener to the reset constant: reset.addEventListener('click', resetScore);

## Validator Testing
---
* **HTML**

    * No errors were returned when passing through the official W3C validator.

* **CSS**

    * No errors were found when passing through the official (Jigsaw) validator.

* **JS**

    * No errors were found when passing through JSHint.

    * The following metrics were returned.

        * There are 6 functions in this file.

        * Function with the largest signature take 2 arguments, while the median is 1.

        * Largest function has 11 statements in it, while the median is 5.5.

        * The most complex function has a cyclomatic complexity value of 8 while the median is 2.

## Unfixed Bugs
---
* No unfixed bugs.

## Deployment
---
* The site was deployed to GitHub pages. The steps to deploy are as follows:

    * In the GitHub repository, navigate to the settings tab.

    * From the source section drop-down menu, select the Master Branch.

    * Once the master branch has been selected, the page provided the link to the completed website.

    * The live link can be found here - [Rock Paper Scissors](https://seanlp.github.io/rock-paper-scissors/).

## Credits
---
### Content

* The icons in the game area were taken from [Font Awesome](https://fontawesome.com/).

* Parts of the code to make the Javascript were taken from [YouTube](https://www.youtube.com/watch?v=WR_pWXJZiRY).