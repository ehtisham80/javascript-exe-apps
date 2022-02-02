function dotProducts(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dotProducts([1, 2, 3], [1, 2, 3]));
console.log(dotProducts([2, 4, 6], [2, 4, 6]));
console.log(dotProducts([1, 1, 1], [0, 1, -1]));
