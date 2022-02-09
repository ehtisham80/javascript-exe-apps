
const FibonacciSequence = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
console.log(FibonacciSequence(2));
console.log(FibonacciSequence(3));
console.log(FibonacciSequence(6));
