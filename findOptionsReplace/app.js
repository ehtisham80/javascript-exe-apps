function findOptionsReplace(mask_str) {
  let digitSum = 0;
  const left = "0".charCodeAt();
  const right = "9".charCodeAt();
  const result = [];
  const mask_data = mask_str.split("");
  let hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (
      left <= mask_data[i].charCodeAt() &&
      mask_data[i].charCodeAt() <= right
    ) {
      digitSum += mask_data[i].charCodeAt() - left;
    } else {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(""));
    }
  }

  return result;
}

console.log(findOptionsReplace("2#0"));
console.log(findOptionsReplace("4#2"));
