function checkThreeNums(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }

  if (x == y || y == z || z == x) {
    return 40;
  }

  return 20;
}
console.log(checkThreeNums(8, 8, 8));
console.log(checkThreeNums(8, 8, 18));
console.log(checkThreeNums(8, 7, 18));
