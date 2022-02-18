function testMembersNums(input_arr, n) {
  for (let i = 0; i < n; i++) {
    if (!input_arr.includes(i + 1)) return false;
  }
  return true;
}
console.log(testMembersNums([1, 2, 3, 4, 5], 5));
console.log(testMembersNums([1, 2, 3, 5], 5));
