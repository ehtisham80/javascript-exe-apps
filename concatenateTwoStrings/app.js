function conTwoStr(str1, str2) {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(conTwoStr("Python", "JS"));
console.log(conTwoStr("ab", "cdef"));
