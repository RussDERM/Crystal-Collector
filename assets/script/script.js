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

var gemValue = 0;
var goalNumber = "";
var playerNumber = 0;
var wins = 0;
var losses = 0;

//jQuery to write info to the doc
$('#playerNumber').html('Your Score : ' + playerNumber);
$('#losses').html('Losses : ' + losses)
$('#wins').html('Wins :' + wins);


// handles game loop
var startPlusLoop = function () {

    //resets player number and writes it to the gameboard at the start of the game loop
    playerNumber = 0;
    $('#playerNumber').html('Your Score : ' + playerNumber);

    // handles control of gemContainer
    $(".gemContainer").empty();

    var gemImages = [
        'https://i.imgur.com/rki6V2C.png',
        'https://i.imgur.com/8M0wScC.png',
        'https://i.imgur.com/PxdRaFz.png',
        'https://i.imgur.com/BdMRktg.png',
    ];

    goalNumber = Math.floor(Math.random() * 120) + 19;
    $('#goalNumber').html('Goal Number : ' + goalNumber);

    for (var i = 0; i < 4; i++) {

        var gemValue = Math.floor(Math.random() * 13) + 1;

        var gem = $('<div>');
        gem.attr({
            'class': 'gem',
            'gemValue': gemValue,
        });
        //change to attr if possible
        gem.css({
            'background-image': 'url("' + gemImages[i] + '")',
            'background-size': 'cover'
        })

        console.log(gem)

        $('.gemContainer').append(gem);
        console.log(gemValue)
    }
    console.log(goalNumber);
}

startPlusLoop();

// Event Handlers
// When clicked, playerNum grabs the gem value, and adds it to playerNumber

$(document).on('click', '.gem', function () {

    var playerNum = parseInt($(this).attr('gemValue'));

    playerNumber += playerNum;

    $('#playerNumber').html('Your Score : ' + playerNumber);


    //once playerNum exceeds the goal number, player loses, score resets, losses are updated, reset function is called
    if (playerNumber > goalNumber) {
        losses++
        playerNumber = 0;
        $('#losses').html('Losses : ' + losses)
        startPlusLoop()
    }
    else if (playerNumber === goalNumber) {
        wins++;
        playerNumber = 0;
        $('#wins').html('Wins :' + wins);
        startPlusLoop();

    }
});












