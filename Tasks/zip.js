// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
//1. change function name and variables name
//2.change loop (for..of) on loop (for)
//3.using (for) we can delete (let j) using variable (i) instead
//4.add empty array and clone of first array
//5. to avoid using delete we will delete if(){}else{} in loop 
//6.instead mutating array , create new one 
const zipTwoArr= function (arr1 = [], arr2 = []) {
  const resArr =[];
  const minLength = Math.min(arr1.length, arr2.length);
  for(let i = 0; i<minLength; i++){
    let arrCell = [arr1[i], arr2[i]];
    resArr.push(arrCell);
  }
  return resArr;
};

module.exports = zipTwoArr;
