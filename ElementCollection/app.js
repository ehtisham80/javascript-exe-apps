const anyElementCollection = (arr, fn = Boolean) => arr.some(fn);
console.log(anyElementCollection([0, 1, 2, 0], (x) => x >= 2));
console.log(anyElementCollection([0, 0, 1, 0]));
