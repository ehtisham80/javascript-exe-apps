
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find((key) => fn(obj[key], key, obj));

console.log(
  findLastKey(
    {
      James: { age: 36, active: true },
      Fredrik: { age: 40, active: false },
      John: { age: 1, active: true },
    },
    (o) => o["active"]
  )
);
