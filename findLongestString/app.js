function findLongestString(str_ara) {
  let max = str_ara[0].length;
  str_ara.map((v) => (max = Math.max(max, v.length)));
  result = str_ara.filter((v) => v.length == max);
  return result;
}

console.log(findLongestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));
