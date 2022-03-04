GenerateRandomNumbers = function (min, max) {
  if (min == null && max == null) return 0;

  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(GenerateRandomNumbers(20, 1));
console.log(GenerateRandomNumbers(1, 10));
console.log(GenerateRandomNumbers(6));
console.log(GenerateRandomNumbers());
