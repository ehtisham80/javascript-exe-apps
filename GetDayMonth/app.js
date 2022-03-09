function GetDayMonth(d) {
  return (d.getDate() < 10 ? "0" : "") + d.getDate();
}

d = new Date();
console.log(GetDayMonth(d));

d = new Date(2015, 10, 1);
console.log(GetDayMonth(d));
