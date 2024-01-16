// Find an intersection of two dictionaries
// 1.delete all unnecessary brackets
//2.rename name of function and variables
//3.change logic , delete else and change if condition and execution unit
//4.change logik in variable (const keys) using method (.filter()) filtered array bu this condition (object_2.hasOwnProperty(key) && object_1[key] === object_2[key])
function intersectionOfTwoDictionaries(firstObject,secondObject) {
  const keys = Object.keys(firstObject).filter(key => object_2.hasOwnProperty(key) && object_1[key] === object_2[key]);
  const resultObject = {};
  
  for (const elem of keys) {
     resultObject[key] = firstObject[key];
  }
  
  return resultObject;
};

module.exports = intersectionOfTwoDictionaries;
