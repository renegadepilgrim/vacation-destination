$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("#activity").val());
    var answer2 = parseInt($("#food").val());
    var answer3 = parseInt($("#beverage").val());
    var answer4 = parseInt($("#location").val());
    var answer5 = parseInt($("#weather").val());
    var userScore = answer1 + answer2 + answer3 + answer4 + answer5;


    if (userScore === 5) {
      $("#result").addClass("thailand");
      $("form#questions").hide();
      $("#result").show();
    } else if (userScore >= 6 && userScore <= 10) {
      $("#result").addClass("israel");
      $("form#questions").hide();
      $("#result").show();
    } else if ( userScore >= 11 && userScore <= 15 ) {
      $("#result").addClass("nepal");
      $("form#questions").hide();
      $("#result").show();
      
  });
});
