function divideNumResult(num, d) {
  if (d == 1) return num;
  else {
    while (num % d === 0) {
      num /= d;
    }
    return num;
  }
}
console.log(divideNumResult(-12, 2));
console.log(divideNumResult(13, 2));
console.log(divideNumResult(13, 1));
