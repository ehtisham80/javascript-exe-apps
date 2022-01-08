function breakAddressURl(url_add) {
  let data = url_add.split("://");
  const protocol = data[0];
  data = data[1].split(".com");
  const domain = data[0];
  data = data[1].split("/");

  if (data[1]) {
    return [protocol, domain, data[1]];
  }

  return [protocol, domain];
}

var url_add = "https://www.w3resource.com/javascript-exercises/";
console.log(`Original address: ${url_add}`);
console.log(breakAddressURl(url_add));
