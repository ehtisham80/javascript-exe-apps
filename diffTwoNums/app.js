function checkDiff(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }

  if (x + y == 8 || Math.abs(x - y) == 8) {
    return true;
  }
  return false;
}
console.log( checkDiff( 7, 8 ) );
console.log(checkDiff(16, 8));
console.log(checkDiff(24, 32));
console.log(checkDiff(17, 18));
