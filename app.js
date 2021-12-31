const transformKey = (obj, fn, acc) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
console.log(
  transformKey(
    { a: 1, b: 2, c: 1 },
    (r, v, k) => {
      (r[v] || (r[v] = [])).push(k);
      return r;
    },
    {}
  )
);
