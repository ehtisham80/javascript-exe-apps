const ConvertSafeNums = (num) =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
console.log(ConvertSafeNums("5.2"));
console.log(ConvertSafeNums("5.52"));
console.log(ConvertSafeNums(Infinity));
