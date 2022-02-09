function FactorialValues(x) {
  if (x === 0) {
    return 1;
  }

  return x * FactorialValues(x - 1);
}

console.log( FactorialValues( 5 ) );
