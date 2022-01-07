function CalculateDays() {
  var today = new Date();
  var christmas = new Date(today.getFullYear(), 11, 24, 15, 0, 0);

  var timeleft = christmas - today;
  var oneday = 1000 * 60 * 60 * 24;
  var onehour = 1000 * 60 * 60;
  var oneminute = 1000 * 60;
  var days = Math.floor(timeleft / oneday);
  var hours = Math.floor((timeleft - oneday * days) / onehour);
  var minutes = Math.floor(
    (timeleft - oneday * days - onehour * hours) / oneminute
  );

  document.getElementById("Answer").innerHTML =
    days + " days " + hours + " hours " + minutes + " minutes";
}
