function firstLastPosition(nums) {
  const end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}

console.log(firstLastPosition([1, 3, 5]));
console.log(firstLastPosition([1, 3, 5, 1]));
console.log(firstLastPosition([2, 4, 6]));
