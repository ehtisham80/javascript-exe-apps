function startedElements(nums) {
  var array1 = [];
  array1.push(nums[0], nums[nums.length - 1]);

  return array1;
}
console.log(startedElements([20, 20, 30]));
console.log(startedElements([5, 2, 7, 8]));
console.log(startedElements([17, 12, 34, 78]));
