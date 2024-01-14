// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zipTwoArr = function (arr1 = [], arr2 = []) {
  let i = 0;
  let j = 0;
  for (x of b) {
    let arrCell = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = arrCell))();
    }
    if (arrCell[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zipTwoArr;
