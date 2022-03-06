function HoursWithoutZeroes(dt) {
  return dt.getHours();
}

dt = new Date();
console.log(HoursWithoutZeroes(dt));

dt = new Date(1989, 10, 1);
console.log(HoursWithoutZeroes(dt));
