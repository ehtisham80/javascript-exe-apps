function changeCharsLowercase(str1) {
  var result = [];
  for (var i = 0; i < str1.length; i++) {
    var char_order = str1.charCodeAt(i) - "a".charCodeAt(0),
      changeCharsLowercase = 25 - char_order + "a".charCodeAt(0);
    result.push(String.fromCharCode(changeCharsLowercase));
  }
  return result.join("");
}
console.log(changeCharsLowercase("abcxyz"));
console.log(changeCharsLowercase("python"));
