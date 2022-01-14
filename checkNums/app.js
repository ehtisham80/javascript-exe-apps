function checkNums(x, y) {
  return x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;
}

console.log(checkNums(15, 9));
console.log(checkNums(25, 15));
console.log(checkNums(7, 8));
console.log(checkNums(25, 10));
console.log(checkNums(5, 9));
console.log(checkNums(7, 9));
console.log(checkNums(9, 25));
