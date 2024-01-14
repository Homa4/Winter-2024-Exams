// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zipTwoArr = function (arr1 = [], arr2 = []) {
  let j = 0;

  for(let i = 0; i < arr2.length; i++){
    let arrCell = [arr1[i], arr2[j]];
    if(i < j){
      delete arr1[i];
    } else {
      arr2[j++] = arrCell;
    }

    if(arrCell[0] === undefined){arr2.length -= 1}
  }
  return b;
};

module.exports = zipTwoArr;
