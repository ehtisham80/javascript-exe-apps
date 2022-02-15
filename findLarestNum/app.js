function maxNum(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "Numbers don't fit in range";
  }
}

console.log(maxNum(45, 60));
console.log(maxNum(25, 60));
console.log(maxNum(45, 80));
