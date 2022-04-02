InputString = function (input) {
  if (Object.prototype.toString.call(input) === "[object String]") return true;
  else return false;
};
console.log(InputString("Hello string"));
console.log(InputString([1, 2, 4, 0]));
