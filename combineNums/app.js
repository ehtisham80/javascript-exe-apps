const combineNums = (arr) =>
  arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);
console.log(combineNums([1, 2]));
console.log(combineNums([1, 2, 3]));
console.log(combineNums([1, 2, 3, 4]));
