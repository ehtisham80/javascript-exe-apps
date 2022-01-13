function checkEqualNums(str) {
  const str_p = str.replace(/[^p]/g, "");

  const str_t = str.replace(/[^t]/g, "");

  const p_num = str_p.length;
  const s_num = str_t.length;

  return p_num === s_num;
}
console.log(checkEqualNums("paatpss"));
console.log(checkEqualNums("paatps"));
