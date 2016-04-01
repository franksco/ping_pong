/// User Interface Logic ///
$(document).ready(function() {
  $("#submitform").click(function(event) {
    event.preventDefault();
    var submission = parseInt($("input").val());
    userInput(submission);
    $("#number_list").show();
  });
});


/// Business Logic ///
function userInput(number){
  var number_list = "";
  for (var index = 1; index <= number; index +=1) {
    if (index % 15 === 0){
      $("#number_list").append("<li>" + "ping-pong" + "</li>");
    }else if (index % 5 === 0){
      $("#number_list").append("<li>" + "pong" + "</li>");
    }else if (index % 3 ===0){
      $("#number_list").append("<li>" + "ping" + "</li>");
    }else
      $("#number_list").append("<li>" + index + "</li>");
  }
}
