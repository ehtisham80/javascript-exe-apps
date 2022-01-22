function ConvertAmountCoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(ConvertAmountCoins(left, coins));
    } else {
      coins.shift();
      return ConvertAmountCoins(amount, coins);
    }
  }
}
console.log(ConvertAmountCoins(46, [25, 10, 5, 2, 1]));
