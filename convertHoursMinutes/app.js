function convertHoursMinutes(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}

console.log(convertHoursMinutes(71));
console.log(convertHoursMinutes(450));
console.log(convertHoursMinutes(1441));
