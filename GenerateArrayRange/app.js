function GenerateArrayRange(start, len) {
  var arr = new Array(len);
  for (var i = 0; i < len; i++, start++) {
    arr[i] = start;
  }
  return arr;
}

console.log(GenerateArrayRange(1, 4));

console.log(GenerateArrayRange(-6, 4));
