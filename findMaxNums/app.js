function findMaxNums(nums, k) {
  let result = 0;
  let temp_sum = 0;
  for (var i = 0; i < k - 1; i++) {
    temp_sum += nums[i];
  }
  for (var i = k - 1; i < nums.length; i++) {
    temp_sum += nums[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= nums[i - k + 1];
  }
  return result;
}

console.log(findMaxNums([1, 2, 3, 14, 5], 2));
console.log(findMaxNums([2, 3, 5, 1, 6], 3));
console.log(findMaxNums([9, 3, 5, 1, 7], 2));
