const DefaultsValues = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);
console.log(DefaultsValues({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }));
