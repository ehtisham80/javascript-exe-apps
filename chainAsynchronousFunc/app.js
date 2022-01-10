//#Source https://bit.ly/2neWfJ2
const chainAsyncFunc = (fns) => {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};
chainAsyncFunc([
  (next) => {
    console.log("0 seconds");
    setTimeout(next, 1000);
  },
  (next) => {
    console.log("1 second");
  },
]);
