function findPrimeFactors(num) {
  function is_prime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  var result = [];
  for (var i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (result.indexOf(i) == -1) result.push(i);
      num /= i;
    }
  }
  return result;
}
console.log(findPrimeFactors(100));
console.log(findPrimeFactors(101));
console.log(findPrimeFactors(103));
console.log(findPrimeFactors(104));
console.log(findPrimeFactors(105));
