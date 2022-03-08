//#Source https://bit.ly/2neWfJ2
const getCoalesceFactory =
  (valid) =>
  (...args) =>
    args.find(valid);
const customCoalesce = getCoalesceFactory(
  (_) => ![null, undefined, "", NaN].includes(_)
);
console.log(customCoalesce(undefined, null, NaN, "", "Waldo"));
