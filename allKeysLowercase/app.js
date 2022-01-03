
const lowercaseAllKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
const myObj = { Name: "Adam", sUrnAME: "Smith" };
const myObjLower = lowercaseAllKeys(myObj);
console.log(myObjLower);
