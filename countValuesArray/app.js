const countValuesArray = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countValuesArray([1, 1, 2, 1, 2, 3], 1));
console.log(countValuesArray([1, 1, 2, 1, 2, 3], 2));
console.log(countValuesArray([1, 1, 2, 1, 2, 3], 3));
