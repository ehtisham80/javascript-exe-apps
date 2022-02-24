function firstLastEqual(nums) {
  const end = nums.length - 1;
  if (nums.length >= 1) {
    return nums[0] == nums[end];
  } else {
    return false;
  }
}

console.log(firstLastEqual([10, 20, 30]));
console.log(firstLastEqual([10, 20, 30, 10]));
console.log(firstLastEqual([20, 20, 20]));
