const filterNonUnique = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(
  filterNonUnique(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
