const ClampNumber = (num, a, b) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
console.log(ClampNumber(2, 3, 5));
console.log(ClampNumber(1, -1, -5));
