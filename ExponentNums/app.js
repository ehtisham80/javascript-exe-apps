var ExponentNums = function (a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * ExponentNums(a, n - 1);
  }
};

console.log(ExponentNums(4, 2));
