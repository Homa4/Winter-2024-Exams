// Split string by the first occurrence of separator
//1.change name of function and variables
//2.change type of loop from for..of to for . So (let j) we don`t need animore
const parseip = (str) => {
  let arr = [];
  if (str === ''){
    return;
  } else {
    const arrOfIpElements = str.split('.');
    if (arrOfIpElements.length != 4) return;
    
     for (let i = 0; i < arrOfIpElements.length;i++) {
      arr[i] = parseInt(arrOfIpElements[i]);
      if (isNaN(arr[i])) return;
    }
  }
  return arr;
};

module.exports = parseip;
