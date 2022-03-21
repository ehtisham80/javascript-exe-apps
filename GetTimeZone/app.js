function SecondsWithLeadingZeros(dt) {
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date();
console.log(SecondsWithLeadingZeros(dt));

dt = new Date(1989, 10, 1);
console.log(SecondsWithLeadingZeros(dt));
