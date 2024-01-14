// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
//1. change function name and variables name
const zipTwoArr= function (arr1 = [], arr2 = []) {
  let i = 0;
  let j = 0;
  for (const elem of arr2) {
    let arrCell = [arr1[i++], elem];
    if (i < j) {
      delete arr1[i++];
    } else {
      (() => (arr2[j++] = arrCell))();
    }
    if (arrCell[0] == undefined) b.length -= 1
  }
  return arr2;
};

module.exports = zipTwoArr;
