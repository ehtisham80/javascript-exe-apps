function CompareStrings(str1, str2) {
  var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}

console.log(CompareStrings("abcd", "AbcD"));
console.log(CompareStrings("ABCD", "Abce"));
