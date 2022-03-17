//#Source https://bit.ly/2neWfJ2
const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
console.log(getURLParameters("http://url.com/page?name=Adam&surname=Smith"));
console.log(getURLParameters("google.com"));
console.log(getURLParameters("https://www.w3resource.com"));
