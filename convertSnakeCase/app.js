
const convertSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

console.log(convertSnakeCase("camelCase"));
console.log(convertSnakeCase("some text"));
console.log(
  convertSnakeCase("some-mixed_string With spaces_underscores-and-hyphens")
);
console.log(convertSnakeCase("AllThe-small Things"));
console.log(
  convertSnakeCase(
    "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML"
  )
);
