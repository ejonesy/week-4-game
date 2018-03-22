

var computerTotalOptions = [51, 76, 12, 33, 30, 67, 49]
var userTotal = 0
var wins = 1
var losses = 1
var computerTotal
var min = 1
var max = 12

//this variable will prevent the user from continuing to click the buttons after winning or losing until they reset the game
var clickable = true

var btns

//reset game when user wins or loses
function initializeGame() {
    computerTotal = computerTotalOptions[Math.floor(Math.random() * computerTotalOptions.length)];
    userTotal = 0
    $("#number-to-guess").text(computerTotal);

    //makes an array of the four buttons
    btns = $('button').slice(1);

    //goes through the btn array to assign each a random value per round
    for (var i = 0; i < btns.length; i++) {
      var crystalValue = Math.floor(Math.random() * (max - min + 1) + min);
      $(btns[i]).val(crystalValue);
    }

    $("#user-total").empty();
    $("#number-to-guess").text("Computer total: " + computerTotal);
  }

//when a crystal is clicked
$(".btn").on("click", function() {

    if (clickable) {
        //its individual numeric value is added into the userTotal
        var value = Number($(this).val());
        userTotal += value;
        $("#user-total").text("Your total: " + userTotal);

        //is userTotal equal to computerTotal?
        if (userTotal === computerTotal) {
            //if yes, user wins
            $("#user-total").text("You win!");
            $(".wins").text("Wins: " + wins++);
            clickable = false;

        //if it is less than, user keeps guessing
        //if it is more than, user loses
        } else if (userTotal > computerTotal) {
            $("#user-total").text("You lose")
            $(".losses").text("Losses: " + losses++);
            clickable = false;
        }
    }   
});
//game restarts
$("#reset").on("click", function() {
    clickable = true;
    initializeGame();

});


initializeGame()
