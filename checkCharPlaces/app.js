function checkCharPlaces(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(checkCharPlaces("Chainsbreak"));
console.log(checkCharPlaces("pane borrowed"));
console.log(checkCharPlaces("abCheck"));
