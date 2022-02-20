function findNumsReplace(num) {
  const digitSum = (num) => {
    let digit_sum = 0;
    while (num) {
      digit_sum += num % 10;
      num = Math.floor(num / 10);
    }

    return digit_sum;
  };

  let result = 0;

  while (num >= 10) {
    result += 1;
    num = digitSum(num);
  }

  return result;
}

console.log(findNumsReplace(123));
console.log(findNumsReplace(156));
