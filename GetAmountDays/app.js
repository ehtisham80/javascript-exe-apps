function DaysOfYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(DaysOfYear(2016));
console.log(DaysOfYear(2017));
