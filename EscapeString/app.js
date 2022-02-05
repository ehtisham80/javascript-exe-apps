
const EscapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
console.log(EscapeRegExp("(test)"));
