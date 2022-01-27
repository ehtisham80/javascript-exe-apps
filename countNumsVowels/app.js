function countVowels(str) {
  return str.replace(/[^aeiou]/g, "").length;
}

console.log(countVowels("Python"));
console.log(countVowels("w3resource.com"));
