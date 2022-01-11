
const CapitalizeLetter = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

console.log(CapitalizeLetter("fooBar"));
console.log(CapitalizeLetter("fooBar", true));
