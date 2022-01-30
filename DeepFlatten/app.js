
const DeepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? DeepFlatten(v) : v)));
console.log(DeepFlatten([1, [2], [[3], 4], 5]));
