
const convertStringWords = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);
console.log(convertStringWords("I love javaScript!!"));
console.log(convertStringWords("python, java, php"));
