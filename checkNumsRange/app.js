function checkNumsRange(x, y, n) {
  if ( n < 40 || n > 10000 )
    return false;
  else if ( n >= x && n <= y )
    return true;
  else
    return false;
}
console.log(checkNumsRange(40, 4000, 45));
console.log(checkNumsRange(80, 320, 79));
console.log(checkNumsRange(89, 4000, 30));
