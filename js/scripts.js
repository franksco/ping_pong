/// User Interface Logic ///
$(document).ready(function() {
  $("form").submit(function(event) {
    // debugger;
    var number = (parseInt($("#number_input").val()));
    var result = place(number);
    $("#number-list").text(result);
    $("#result").show();
    event.preventDefault();
  })
});

/// Business Logic ///
