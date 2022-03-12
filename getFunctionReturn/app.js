const over =
  (...fns) =>
  (...args) =>
    fns.map((fn) => fn.apply(null, args));
const GetMinMax = over(Math.min, Math.max);
console.log(GetMinMax(1, 2, 3, 4, 5));
console.log(GetMinMax(1, 2, 5, 4, 3));
console.log(GetMinMax(1, 2, 5, -4, 3));
