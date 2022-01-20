//#Source https://bit.ly/2neWfJ2
const compareWithObjects = (obj, source, fn) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
const isGreeting = (val) => /^h(?:i|ello)$/.test(val);

console.log(
  compareWithObjects(
    { greeting: "hello" },
    { greeting: "hi" },
    (oV, sV) => isGreeting(oV) && isGreeting(sV)
  )
);
