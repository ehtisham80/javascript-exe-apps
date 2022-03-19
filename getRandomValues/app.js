const getRandomValues = (min, max) => Math.random() * (max - min) + min;
console.log(getRandomValues(2, 10));
console.log(getRandomValues(1, 5));
console.log(getRandomValues(-5, -2));
console.log(getRandomValues(0, 1));
