//#Source https://bit.ly/2neWfJ2
const getRandomNumsRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(getRandomNumsRange(0, 5));
console.log(getRandomNumsRange(2, 5));
console.log(getRandomNumsRange(5, -5));
console.log(getRandomNumsRange(-2, -7));
