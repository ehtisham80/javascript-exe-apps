function findSortedPairs(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
        result++;
      }
    }
  }
  return result;
}
console.log(findSortedPairs([1, 2, 3]));
console.log(findSortedPairs([2, 4, 6]));
console.log(findSortedPairs([2, 4, 16]));
