const DecodeEncondeData = (str) => new Buffer(str, "base64").toString("binary");
console.log(DecodeEncondeData("Zm9vYmFy"));
