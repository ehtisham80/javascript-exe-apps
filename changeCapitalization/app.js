function changeCapitalization(txt) {
  var str1 = "";
  for (var i = 0; i < txt.length; i++) {
    if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
    else str1 += txt[i].toUpperCase();
  }
  return str1;
}

console.log(changeCapitalization("w3resource"));
console.log(changeCapitalization("Germany"));
