const getDimensionalArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() =>
        getDimensionalArray(val, ...args.slice(1))
      );

console.log(getDimensionalArray(1, 3));
console.log(getDimensionalArray(5, 2, 2, 2));
