
const FactorialNumbers = (n) =>
  n < 0
    ? (() => {
        throw new TypeError("Negative numbers are not allowed!");
      })()
    : n <= 1
    ? 1
    : n * FactorialNumbers(n - 1);

console.log(FactorialNumbers(1));
console.log(FactorialNumbers(5));
console.log(FactorialNumbers(7));
