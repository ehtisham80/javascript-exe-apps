function HTMLEscape(html_str) {
  "use strict";

  return html_str.replace(/[&<>"]/g, function (tag) {
    var chars_to_replace = {
      "&": "&",
      "<": "<",
      ">": ">",
      '"': '"',
    };

    return chars_to_replace[tag] || tag;
  });
}

console.log(
  HTMLEscape(
    "&lt;a href=&quot;javascript-string-practice-007.php&quot; target=&quot;_blank&quot;&gt;"
  )
);
