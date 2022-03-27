const groupValueCountBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
console.log(groupValueCountBy([6, 10, 100, 10], Math.sqrt));
console.log(groupValueCountBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupValueCountBy(["one", "two", "three"], "length"));
