const decapitalizeLetter = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));
console.log(decapitalizeLetter("W3resource"));
console.log(decapitalizeLetter("Red", true));
