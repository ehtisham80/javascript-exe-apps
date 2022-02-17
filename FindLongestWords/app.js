function LongestCountrName(country_name) {
  return country_name.reduce(function (lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
}
console.log(
  LongestCountrName(["Australia", "Germany", "United States of America", "Sweden"])
);
