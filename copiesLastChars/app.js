function copiesLastChars(str) {
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3);
    return result_str + result_str + result_str + result_str;
  } else return false;
}
console.log(copiesLastChars("Python 3.0"));
console.log(copiesLastChars("JS"));
console.log(copiesLastChars("JavaScript"));
