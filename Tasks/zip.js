// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
//1. change function name and variables name
//2.change loop (for..of) on loop (for)
//3.using (for) we can delete (let j) using variable (i) instead
const zipTwoArr= function (arr1 = [], arr2 = []) {

  for(let i = 0; i<arr2.length; i++){
    let arrCell = [arr1[i], arr2[i]];
    if (i < 0) {
      delete arr1[i];
    } else {
      arr2[i] = arrCell;
    }

    if (arrCell[0] == undefined){
      arr2.length -= 1
    }
  }
  return arr2;
};

module.exports = zipTwoArr;
