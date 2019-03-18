// P.C.
// * There will be four crystals displayed as buttons on the page.
//      generate a array of buttons, with random images. [loop]
// 
//    * The player will be shown a random number at the start of the game.
//      generate random number between 19 and 120. 
//
//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//      click event, get value and store in score var
//
//     * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.
//      see above
//
//     * The player wins if their total score matches the random number from the beginning of the game.
//       if goalNumber === playerNumber then 'you win'
//
//    * The player loses if their score goes above the random number.
//      else if playerNumber > goalNumber then 'you lose'
//
//    * The game restarts whenever the player wins or loses.
//      redefine variables, add outcome to win/loss counter
//
//      * When the game begins again, the player should see a new random number.Also, all the crystals will have four new hidden values.Of course, the user's score (and score counter) will reset to zero.
//         restart game loop, redefine variables
//
//     * The app should show the number of games the player wins and loses.To that end, do not refresh the page as a means to restart the game.
// 
//

var goalNumber;
var wins = 0;
var losses = 0;

// handles game loop
var gameLoop = function () {

    // handles control of gemContainer
    $(".gemContainer").empty();

    var gemImages = [
        '..\Crystal-Collector\assets\images\Gem 1.png',
        '..\Crystal-Collector\assets\images\Gem 2.png',
        '..\Crystal-Collector\assets\images\Gem 3.png',
        '..\Crystal-Collector\assets\images\Gem 4.png',
    ];

    goalNumber = Math.floor(Math.random() * 120) + 19;
}