const byteSize = (str) => new Blob([str]).size;
console.log(byteSize("123456"));
console.log(byteSize("Hello World"));
console.log(byteSize("Ã¢"));
