// Split string by the first occurrence of separator
//1.change name of function and variables
const parseip = (str) => {
  let arr = [];
  if (str === '') return;
  else {
    const arrOfIpElements = str.split('.');
    if (arrOfIpElements.length != 4) return;
    let j = 0;
    for (const elem of arrOfIpElements) {
      arr[j] = parseInt(elem);
      if (isNaN(arr[j])) return;
      j++;
    }
  }
  return arr;
};

module.exports = parseip;
