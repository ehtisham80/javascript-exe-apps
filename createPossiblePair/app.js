const possiblePair = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);
console.log(possiblePair([1, 2], ["a", "b"]));
console.log(possiblePair([1, 2], [1, 2]));
console.log(possiblePair(["a", "b"], ["a", "b"]));
