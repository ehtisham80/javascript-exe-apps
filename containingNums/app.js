const ContainingArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

console.log(ContainingArrayWithRangeRight(5));
console.log(ContainingArrayWithRangeRight(7, 3));
console.log(ContainingArrayWithRangeRight(9, 0, 2));
