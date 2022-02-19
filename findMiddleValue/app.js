function findMiddleValue(a, b) {
  const new_array = [];
  new_array.push(a[1], b[1]);

  return new_array;
}
console.log(findMiddleValue([1, 2, 3], [1, 5, 6]));
console.log(findMiddleValue([3, 3, 3], [2, 8, 0]));
console.log(findMiddleValue([4, 2, 7], [2, 4, 5]));
