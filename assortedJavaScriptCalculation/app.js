function CalculateDays() {
  var today = new Date();
  var christmas = new Date(today.getFullYear(), 11, 24, 15, 0, 0);

  var timeLeft = christmas - today;
  var oneDay = 1000 * 60 * 60 * 24;
  var oneHour = 1000 * 60 * 60;
  var oneMinute = 1000 * 60;
  var oneSecond = 1000;

  if (timeLeft < 0) {
    christmas = new Date(today.getFullYear() + 1, 11, 24, 15, 0, 0);
    timeLeft = christmas - today;
  }

  var days = Math.floor(timeLeft / oneDay);
  var hours = Math.floor((timeLeft - oneDay * days) / oneHour);
  var minutes = Math.floor(
    (timeLeft - oneDay * days - oneHour * hours) / oneMinute
  );
  var seconds = Math.floor(
    (timeLeft - oneDay * days - oneHour * hours - oneMinute * minutes) /
      oneSecond
  );

  var show = "There is ";
  if (days == 0) {
    show = "<b>HURRAY!</b> it is Christmas in just ";
  }
  if (days > 0) {
    show += days + " days ";
  }
  if (hours > 0 && days < 30) {
    show += hours + " hours ";
  }
  if (minutes > 0 && days < 20) {
    show += minutes + " minutes ";
  }
  if (seconds > 0 && days < 10) {
    show += seconds + " seconds";
  }
  if (days > 0) {
    show += " left until Christmas.";
  } else {
    show += ".";
  }

  document.getElementById("Answer").innerHTML = show;
}
