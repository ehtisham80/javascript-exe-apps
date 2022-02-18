function findMaxDiffernce(arr) {
  var max = -1;
  var temp;
  for (var i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
}

console.log(findMaxDiffernce([1, 2, 3, 8, 9]));
console.log(findMaxDiffernce([1, 2, 3, 18, 9]));
console.log(findMaxDiffernce([13, 2, 3, 8, 9]));
