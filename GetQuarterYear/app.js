function GetQuarterYear(date) {
  var month = date.getMonth() + 1;
  return Math.ceil(month / 3);
}

console.log(GetQuarterYear(new Date()));
console.log(GetQuarterYear(new Date(2015, 1, 21)));
console.log(GetQuarterYear(new Date(2015, 10, 18)));
