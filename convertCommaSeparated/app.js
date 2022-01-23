const convertCommaSeparated = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

console.log(convertCommaSeparated("a,b\nc,d"));
console.log(convertCommaSeparated("a;b\nc;d", ";"));
console.log(convertCommaSeparated("head1,head2\na,b\nc,d", ",", true));
