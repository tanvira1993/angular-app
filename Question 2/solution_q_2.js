const maxRepeating = (str) => {
  let length = str.length;
  let count = 0;
  let result = "";

  let res = str[0];
  for (let i = 0; i < length; i++) {
    let cur_count = 1;
    for (let j = i + 1; j < length; j++) {
      if (str[i] !== str[j]) {
        break;
      }
      cur_count++;
    }

    if (cur_count > count) {
      count = cur_count;
      res = str[i];
    }
  }
  for (let k = 0; k < count; k++) {
    result += res;
  }
  console.log(result);
};
maxRepeating("okkkkkay");
