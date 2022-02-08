function extractString(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(extractString("Python"));
console.log(extractString("JavaScript"));
console.log(extractString("PHP"));
