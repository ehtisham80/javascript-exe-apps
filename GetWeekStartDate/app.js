function GetWeekStartDate(date) {
  var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

  return new Date(date.setDate(diff));
}

dt = new Date();

console.log(GetWeekStartDate(dt).toString());
