function FilterArrayValues(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if (value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(FilterArrayValues([58, "", "abcd", true, null, false, 0]));
