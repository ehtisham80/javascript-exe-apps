//#Source https://bit.ly/2neWfJ2
const castValueArray = (val) => (Array.isArray(val) ? val : [val]);
console.log(castValueArray("w3r"));
console.log(castValueArray([100]));
