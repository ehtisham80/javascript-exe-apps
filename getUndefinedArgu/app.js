//#Source https://bit.ly/2neWfJ2 
const getUndefinedArgu = (...args) => args.find(_ => ![undefined, null].includes(_));
console.log(getUndefinedArgu(null, undefined, '', NaN, 'abcd'));
