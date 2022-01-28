const currencyFormattingNums = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);

console.log(currencyFormattingNums(123456.789, "EUR")); // currency: Euro | currencyLangFormat: Local
console.log(currencyFormattingNums(123456.789, "USD", "en-us")); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(currencyFormattingNums(123456.789, "USD", "fa")); //currency: US Dollar | currencyLangFormat: Farsi
console.log(currencyFormattingNums(322342436423.2435, "JPY")); //currency: Japanese Yen | currencyLangFormat: Local
console.log(currencyFormattingNums(322342436423.2435, "JPY", "fi")); //currency: Japanese Yen | currencyLangFormat: Finnish
