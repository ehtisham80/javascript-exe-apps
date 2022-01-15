function checkSortedNums(arra1, arra2) {
  for (let i = 0; i < arra1.length; i++) {
    if (arra2.includes(arra1[i])) return true;
  }
  return false;
}
console.log(checkSortedNums([1, 2, 3], [3, 4, 5]));
console.log(checkSortedNums([1, 2, 3], [5, 6, 7]));
