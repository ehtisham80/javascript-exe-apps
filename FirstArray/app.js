var FirstArray = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

console.log(FirstArray([7, 9, 0, -2]));
console.log(FirstArray([], 3));
console.log(FirstArray([7, 9, 0, -2], 3));
console.log(FirstArray([7, 9, 0, -2], 6));
console.log(FirstArray([7, 9, 0, -2], -3));
