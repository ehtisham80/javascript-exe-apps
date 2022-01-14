function checkNums(a, b) {
  if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
  } else return false;
}
console.log(checkNums(14, 21));
console.log(checkNums(14, 20));
console.log(checkNums(16, 20));
