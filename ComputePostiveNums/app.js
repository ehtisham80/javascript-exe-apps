function ComputeFactors(n) {
  var num_factors = [],
    i;

  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0) {
      num_factors.push(i);
      if (n / i !== i) num_factors.push(n / i);
    }
  num_factors.sort(function (x, y) {
    return x - y;
  }); // numeric sort
  return num_factors;
}
console.log(ComputeFactors(15)); // [1,3,5,15]
console.log(ComputeFactors(16)); // [1,2,4,8,16]
console.log(ComputeFactors(17)); // [1,17]
