const getEveryNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 1));
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 3));
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 4));
