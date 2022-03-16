const getNValuesTake = (arr, n = 1) => arr.slice(0, n);
console.log(getNValuesTake([1, 2, 3], 5));
console.log(getNValuesTake([1, 2, 3], 0));
