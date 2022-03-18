const getRandomIntegersRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
console.log(getRandomIntegersRange(1, 20, 10));
console.log(getRandomIntegersRange(-10, 10, 5));
