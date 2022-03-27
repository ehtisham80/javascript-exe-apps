//#Source https://bit.ly/2neWfJ2
const groupByValues = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
console.log(groupByValues([6.1, 4.2, 6.3], Math.sqrt));
console.log(groupByValues([6.1, 4.2, 6.3], Math.floor));
console.log(groupByValues(["one", "two", "three"], "length"));
