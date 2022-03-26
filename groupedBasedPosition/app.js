const gropuedBasePosition = (...arrays) => {
  const maxLength = Math.max(...arrays.map((x) => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

console.log(gropuedBasePosition(["a", "b"], [1, 2], [true, false]));
console.log(gropuedBasePosition(["a"], [1, 2], [true, false]));
