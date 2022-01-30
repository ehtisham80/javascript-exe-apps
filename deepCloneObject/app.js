const deepCloneObject = (obj) => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepCloneObject(obj[key]) : obj[key])
  );
  return Array.isArray(obj)
    ? (clone.length = obj.length) && Array.from(clone)
    : clone;
};
const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepCloneObject(a); // a !== b, a.obj !== b.obj
console.log(b);
