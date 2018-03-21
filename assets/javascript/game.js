

var computerTotalOptions = [51, 76, 12, 33]
var userTotal = 0
var button1
var button2
var button3
var button4
var wins = 0
var losses = 0
var computerTotal
var min = 1
var max = 12

//reset game when user wins or loses
function initializeGame() {
    computerTotal = computerTotalOptions[Math.floor(Math.random() * computerTotalOptions.length)]
    userTotal = 0
    $("#number-to-guess").text(computerTotal);
    button1 = Math.floor(Math.random() * (max - min + 1) + min);
    $("#button-1").val(button1);
    button2 = Math.floor(Math.random() * (max - min + 1) + min);
    $("#button-2").val(button2);
    button3 = Math.floor(Math.random() * (max - min + 1) + min);
    $("#button-3").val(button3);
    button4 = Math.floor(Math.random() * (max - min + 1) + min);
    $("#button-4").val(button4);
    $("#user-total").empty();
    $("#number-to-guess").text("Computer total: " + computerTotal);
  }

//when a crystal is clicked
$(".btn").on("click", function() {

    //its individual numeric value is added into the userTotal
    var value = Number($(this).val());
    userTotal += value;
    $("#user-total").text("Your total: " + userTotal);

    //is userTotal equal to computerTotal?
    if (userTotal === computerTotal) {
        //if yes, user wins
        $("#user-total").text("You win!");
        $(".wins").text(wins++);
        console.log("Wins", wins);

    //if it is less than, user keeps guessing
    //if it is more than, user loses
    } else if (userTotal > computerTotal) {
        $("#user-total").text("You lose")
        $(".losses").text(losses++);
        console.log("Losses", losses);
    }
});
//game restarts
$("#reset").on("click", function() {

    initializeGame();
    console.log("reset");

});


initializeGame()
