function FullNumericYear(dt) {
  return dt.getFullYear();
}
dt = new Date();
console.log(FullNumericYear(dt));

dt = new Date(2015, 10, 1);
console.log(FullNumericYear(dt));
