
const FlattenArray = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? FlattenArray(v, depth - 1) : v),
    []
  );

console.log(FlattenArray([1, [2], 3, 4]));
console.log(FlattenArray([1, [2, [3, [4, 5], 6], 7], 8], 2));
