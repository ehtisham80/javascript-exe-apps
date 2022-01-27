function copiesString(str, n) {
  if (n < 0) return false;
  else return str.repeat(n);
}
console.log(copiesString("abc", 5));
console.log(copiesString("abc", 0));
console.log(copiesString("abc", -2));
