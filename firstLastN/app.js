function twoStrings(str, n) {
  first_part = str.substring(0, n);
  last_part = str.substring(str.length - n);
  return first_part + last_part;
}

console.log(twoStrings("JavaScript", 2));
console.log(twoStrings("JavaScript", 3));
