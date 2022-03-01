const GenerateObjects = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});

console.log(
  GenerateObjects(
    [
      { id: 10, name: "apple" },
      { id: 20, name: "orange" },
    ],
    (x) => x.id
  )
);
