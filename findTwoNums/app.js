function findTwoNums(ara, n) {
  let max_val = -1;
  for (let i = 0; i < ara.length; i++) {
    for (let j = i + 1; j < ara.length; j++) {
      const x = Math.abs(ara[i] - ara[j]);
      if (x <= n) {
        max_val = Math.max(max_val, x);
      }
    }
  }
  return max_val;
}
console.log(findTwoNums([12, 10, 33, 34], 10));
console.log(findTwoNums([12, 10, 33, 34], 24));
console.log(findTwoNums([12, 10, 33, 44], 40));
