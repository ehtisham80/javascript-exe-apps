function Get12HoursWithZeroes(dt) {
  return (
    ((dt.getHours() % 12 || 12) < 10 ? "0" : "") + (dt.getHours() % 12 || 12)
  );
}

dt = new Date();
console.log(Get12HoursWithZeroes(dt));

dt = new Date(1989, 10, 1);
console.log(Get12HoursWithZeroes(dt));
