const fliterValuesArray = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
  return pulled;
};
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(fliterValuesArray(arra1, "a", "c"));
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(fliterValuesArray(arra2, "b"));
