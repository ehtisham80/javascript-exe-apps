const testAllEqual = (arr) => arr.every((val) => val === arr[0]);
console.log(testAllEqual([1, 2, 3, 4, 5, 6]));
console.log(testAllEqual([12, 12, 12, 12]));
