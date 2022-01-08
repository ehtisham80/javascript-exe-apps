function calculateSumNums (num)
{
    let s_sum = 0;
    while (num > 0) {
      s_sum += num;
      num = Math.floor(num / 2);
    }
    return s_sum;
}

console.log( calculateSumNums( 8 ) )
console.log( calculateSumNums( 9 ) )
console.log( calculateSumNums( 26 ) )
