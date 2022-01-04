const arrayFilter = (pred, array) => array.filter((...args) => !pred(...args));

console.log(arrayFilter((x) => x % 2 === 0, [1, 2, 3, 4, 5]));

console.log(
  arrayFilter((word) => word.length > 4, ["Apple", "Pear", "Kiwi", "Banana"])
);
