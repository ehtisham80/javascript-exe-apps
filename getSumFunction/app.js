const getSumThroughFunction = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);

console.log(getSumThroughFunction([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(getSumThroughFunction([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], "n")
);
