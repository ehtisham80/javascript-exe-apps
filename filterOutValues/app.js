const filterOutValues = (arr, ...args) => arr.filter((v) => !args.includes(v));

console.log(filterOutValues([2, 1, 2, 3], 1, 2));
console.log(filterOutValues([2, 1, 2, 3], 3));
