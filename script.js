
// jquery to have all of the HTML load before running the JavaScript
$(document).ready(function() { 
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
      // set "value" to the value to the nearby element with the class of "description"
    var value = $(this).siblings(".description").val();
    // set "time" to the ID of the nearby parent attribute 
    var time = $(this).parent().attr("id");

    // save the "time" and "value" in localStorage
    localStorage.setItem(time, value);
  });

  // adding function to delete the event locally and from localStorage
  $(".delBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.removeItem(time, value);
    $(this).siblings(".description").val("");
  });

  // create a function and call it hourUpdater
  function hourUpdater() {
    // create a varible called currentHour and set it to current hour on a 24 hour clock
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      // create a varible called "blockHour" and set it equal to the portion of the ID after the hyphen
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        // adds the class of "past" to the element if it is less than the currentHour
        $(this).addClass("past");
      } 
      // if the ID has the identical number of the currentHour
      else if (blockHour === currentHour) {
        // then remove the class of "past"
        $(this).removeClass("past");
        // then add the class of "present"
        $(this).addClass("present");
      } 
      // if it doesn't meet the requirements of above
      else {
        // then remove the class of "past"
        $(this).removeClass("past");
        // then also remove the class of "present"
        $(this).removeClass("present");
        // then add the class of "future"
        $(this).addClass("future");
      }
    });
  }
  // load the function of hourUpdater when it is loaded
  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
