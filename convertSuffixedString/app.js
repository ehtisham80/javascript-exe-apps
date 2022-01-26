//#Source https://bit.ly/2neWfJ2
const getMeridiemSuffixValues = (num) =>
  num === 0 || num === 24
    ? 12 + "am"
    : num === 12
    ? 12 + "pm"
    : num < 12
    ? (num % 12) + "am"
    : (num % 12) + "pm";

console.log(getMeridiemSuffixValues(0));
console.log(getMeridiemSuffixValues(11));
console.log(getMeridiemSuffixValues(13));
console.log(getMeridiemSuffixValues(25));
